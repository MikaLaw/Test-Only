import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body,
	html,
	#root {
		height: 100%;
		margin: 0;
	}
	*,
	*:before,
	*:after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	body {
		position: relative;
		min-height: 100%;
		font-family: 'PT Sans';
		font-size: 16px;
		line-height: 27px;
		font-weight: 400;
		background: #F4F5F9;
		color: #42567A;
	}
`;
