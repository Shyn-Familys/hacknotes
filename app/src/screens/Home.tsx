import React, { Fragment } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "react-query";
import { getAllNotes } from "../api/notes";
import { AppContainer } from "../components/AppContainer";
import { AppLoader } from "../components/AppLoader";
import { TopNav } from "../components/AppNav";
import { ErrorText, HelperText } from "../components/AppTypography";
import { NoteList } from "../components/NoteList";

export const HomeScreen = () => {
	const { error, data, isLoading } = useQuery("notes", () => getAllNotes(), {
		refetchOnWindowFocus: false
	});

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<TopNav />
			<AppContainer>
				{data && (
					<Fragment>
						{data.filter((note) => note.pinned).length > 0 && (
							<NoteList notes={data} pinned />
						)}
						<NoteList notes={data} />
						{data.length === 0 && <HelperText>No Notes Available</HelperText>}
					</Fragment>
				)}
				{isLoading && <AppLoader />}
				{error && <ErrorText status="danger">{error.message}</ErrorText>}
			</AppContainer>
		</SafeAreaView>
	);
};
