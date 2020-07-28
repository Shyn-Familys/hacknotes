export enum AsyncActionStatus {
	IDLE = "idle",
	LOADING = "loading",
	SUCCEEDED = "succeeded",
	FAILED = "failed"
}

export enum NoteActions {
	ALL_NOTES = "notes/all",
	CREATE_NOTE = "notes/create"
}

export type NoteSliceState = {
	notes: Record<string, Note>;
	status: Record<NoteActions, AsyncActionStatus>;
	error: string | null;
};

export type Note = {
	id: string;
	title: string;
	archived: boolean;
	color: string;
	content: string;
	authorId: string;
};

export type CreateNoteInput = {
	title: string;
	content: string;
};

export enum UserActions {
	LOGIN = "user/login",
	SIGNUP = "user/signup"
}

export type User = {
	id: string;
	name: string;
	email: string;
	username: string;
	avatar: string;
};

export type UserSliceState = {
	user: User | null;
	status: Record<UserActions, AsyncActionStatus>;
	error: string | null;
};

export type UserLoginInput = {
	username: string;
	password: string;
};

export type CreateUserInput = {
	name: string;
	username: string;
	email: string;
	password: string;
};
