import Icon from "@atlaskit/icon";
import React from "react";

const CustomIcon = () => (
	<svg
		version="1.1"
		id="Layer_1"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		x="0px"
		y="0px"
		viewBox="0 0 24 24"
		xmlSpace="preserve"
		fill="currentColor"
	>
		<path
			d="M14.6,12.1L13,13.7V10h-2v3.7l-1.6-1.6L8,13.5l4,4l4-4L14.6,12.1z M14.6,12.1L13,13.7V10h-2v3.7l-1.6-1.6
	L8,13.5l4,4l4-4L14.6,12.1z M14.6,12.1L13,13.7V10h-2v3.7l-1.6-1.6L8,13.5l4,4l4-4L14.6,12.1z"
		/>
		<path
			d="M20.5,5.2l-1.4-1.7C18.9,3.2,18.5,3,18,3H6C5.5,3,5.1,3.2,4.8,3.5L3.5,5.2C3.2,5.6,3,6,3,6.5V19
	c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6.5C21,6,20.8,5.6,20.5,5.2z M19,19H5V8h14V19z"
		/>
	</svg>
);

export default () => <Icon glyph={CustomIcon} label="palette" />;
