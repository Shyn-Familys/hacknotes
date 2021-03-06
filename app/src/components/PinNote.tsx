import { TopNavigationAction } from "@ui-kitten/components";
import React from "react";
import { Platform, ToastAndroid } from "react-native";
import { useUpdateNoteMutation } from "../utils/hooks";
import { NoteActionProps } from "../utils/types";
import { renderNavigationActionIcon } from "./AppNav";

export const PinNote = ({ note, setNote }: NoteActionProps) => {
	const [togglePin] = useUpdateNoteMutation({
		onSuccess: (data) => {
			setNote(data);
			if (Platform.OS === "android")
				ToastAndroid.show(
					data.pinned ? "Note Pinned!" : "Note Unpinned!",
					ToastAndroid.LONG
				);
		}
	});

	const handleOnPress = () =>
		togglePin({ noteId: note.id, pinned: !note.pinned });

	return (
		<TopNavigationAction
			icon={renderNavigationActionIcon(
				note.pinned ? "bookmark" : "bookmark-outline"
			)}
			onPress={handleOnPress}
		/>
	);
};
