import { Text } from "@ui-kitten/components";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppContainer } from "../components/AppContainer";
import { TopNav } from "../components/AppNav";

export const ArchiveScreen = () => {
	return (
		<SafeAreaView>
			<TopNav />
			<AppContainer>
				<Text>Archive Screen</Text>
			</AppContainer>
		</SafeAreaView>
	);
};
