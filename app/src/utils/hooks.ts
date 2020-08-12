import {
	MutationOptions,
	queryCache,
	QueryKeyOrPredicateFn,
	useMutation
} from "react-query";
import { createNote, updateNote } from "../api/notes";
import { updateAvatar, userLogin, userSignup } from "../api/user";
import {
	CreateNoteInput,
	CreateUserInput,
	Note,
	UpdateNoteInput,
	User,
	UserLoginInput
} from "./types";

export const useUpdateAvatarMutation = () =>
	useMutation(updateAvatar, {
		onSuccess: (data) => queryCache.setQueryData("me", data)
	});

export const useLoginMutation = (
	options?: MutationOptions<User, UserLoginInput, Error, unknown>
) =>
	useMutation(userLogin, {
		onSuccess: (data, variables) => {
			queryCache.setQueryData("me", data);
			options?.onSuccess && options.onSuccess(data, variables);
		}
	});

export const useSignupMutation = (
	options?: MutationOptions<User, CreateUserInput, Error, unknown>
) =>
	useMutation(userSignup, {
		onSuccess: (data, variables) => {
			queryCache.setQueryData("me", data);
			options?.onSuccess && options.onSuccess(data, variables);
		}
	});

export const useCreateNoteMutation = (
	options?: MutationOptions<Note, CreateNoteInput, Error, unknown>
) =>
	useMutation(createNote, {
		onSuccess: (data, variables) => {
			addNoteToNoteList("notes", data);
			options?.onSuccess && options.onSuccess(data, variables);
		}
	});

export const useUpdateNoteMutation = (
	options?: MutationOptions<Note, UpdateNoteInput, Error, unknown>
) =>
	useMutation(updateNote, {
		onSuccess(data, variables) {
			switch (true) {
				case typeof variables.deleted !== "undefined":
					if (variables.deleted) {
						addNoteToNoteList(["notes", { deleted: true }], data);
						removeNoteFromNoteList("notes", data);
						removeNoteFromNoteList(["notes", { archived: true }], data);
					} else {
						addNoteToNoteList("notes", data);
						removeNoteFromNoteList(["notes", { deleted: true }], data);
					}

					break;

				case typeof variables.archived !== "undefined":
					if (variables.archived) {
						addNoteToNoteList(["notes", { archived: true }], data);
						removeNoteFromNoteList("notes", data);
					} else {
						addNoteToNoteList("notes", data);
						removeNoteFromNoteList(["notes", { archived: true }], data);
					}

					break;

				case typeof variables.pinned !== "undefined":
					if (variables.pinned) {
						removeNoteFromNoteList("notes", data);
						addNoteToNoteList("notes", data);
						removeNoteFromNoteList(["notes", { archived: true }], data);
					} else {
						updateNoteInNoteList("notes", data);
					}
					break;

				default:
					updateNoteInNoteList("notes", data);
					updateNoteInNoteList(["notes", { archived: true }], data);
			}
			options?.onSuccess && options.onSuccess(data, variables);
		}
	});

const addNoteToNoteList = (listKey: QueryKeyOrPredicateFn, data: Note) => {
	queryCache.setQueryData<Note[]>(listKey, (notes) =>
		[data].concat(...(notes || []))
	);
};

const updateNoteInNoteList = (listKey: QueryKeyOrPredicateFn, data: Note) => {
	queryCache.setQueryData<Note[]>(listKey, (notes) =>
		notes?.map((note) => (note.id !== data.id ? note : data))
	);
};

const removeNoteFromNoteList = (listKey: QueryKeyOrPredicateFn, data: Note) => {
	queryCache.setQueryData<Note[]>(listKey, (notes) =>
		notes?.filter((note) => note.id !== data.id)
	);
};
