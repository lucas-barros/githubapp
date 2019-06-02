import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&display=swap');

	* {
		box-sizing: border-box;
	}
  body {
		margin: 0;
		padding: 0;
    color: #333;
    display: flex;
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
	}
	h1 {
		font-size: 1.75rem;
  }
	h2 {
		font-size: 0.95rem;
	}
	html, body, #root {
		height: 100%;
		width: 100%;
	}
	a {
    color: #0366d6;
    text-decoration: none;
	}
`;

export default GlobalStyle;
