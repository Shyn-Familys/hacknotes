import React, { Fragment } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "react-query";
import { getAllNotes } from "../api/notes";
import { AppContainer } from "../components/AppContainer";
import { AppLoader } from "../components/AppLoader";
import { TopNav } from "../components/AppNav";
import { ErrorText, HelperText } from "../components/AppTypography";
import { NoteList } from "../components/NoteList";
import { VerticalSpacer } from "../components/VerticalSpacer";

export const ArchiveScreen = () => {
	const { error, data, isLoading } = useQuery(
		["notes", { archived: true }],
		(_key, filters) => getAllNotes(filters),
		{ refetchOnWindowFocus: false }
	);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<TopNav title="Archive" />
			<AppContainer>
				{data && (
					<Fragment>
						{data.length > 0 ? (
							<NoteList notes={data} />
						) : (
							<HelperText>No Notes in Archive</HelperText>
						)}
					</Fragment>
				)}
				{error && (
					<Fragment>
						<VerticalSpacer size={100} />
						<ErrorText>{error.message}</ErrorText>
					</Fragment>
				)}
				{isLoading && <AppLoader />}
			</AppContainer>
		</SafeAreaView>
	);
};
