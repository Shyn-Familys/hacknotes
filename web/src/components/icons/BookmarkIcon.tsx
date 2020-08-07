import Icon from "@atlaskit/icon";
import React from "react";
import { AppIconProps } from "../../utils/types";

const FilledIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
	>
		<g data-name="Layer 2">
			<g data-name="bookmark">
				<rect width="24" height="24" opacity="0" />
				<path d="M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86 1 1 0 0 1-1 0l-5.67-3.21-5.33 3.2A1 1 0 0 1 6 21z" />
			</g>
		</g>
	</svg>
);

const OutlinedIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
	>
		<g data-name="Layer 2">
			<g data-name="bookmark">
				<rect width="24" height="24" opacity="0" />
				<path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z" />
			</g>
		</g>
	</svg>
);

export default ({ filled }: AppIconProps) => (
	<Icon glyph={filled ? FilledIcon : OutlinedIcon} label="bookmark" />
);