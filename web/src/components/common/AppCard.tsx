import { colors } from "@atlaskit/theme";
import styled from "styled-components";

export const AppCard = styled.div`
	width: calc(100% - 52px);
	border: 1px solid ${colors.N50};
	padding: 20px;
	border-radius: 5px;
`;

export const AppCardFooter = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row-reverse;
`;
