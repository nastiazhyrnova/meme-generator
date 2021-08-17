import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin:0;
  box-sizing: border-box;
  font-family: 'Impact', sans-serif;
  transition: all 0.3s ease
}
:root {
  --orange-color: #E58F26;
  --purple-color: #88459A;
  --main-black-color: #222222;
  --main-white-color: #ffffff;
}
html {
  font-size: 16px;
}
h1{
  color: var(--main-black-color);
  text-shadow: 0 0 15px var(--main-white-color);
  /* background-color: var(--main-white-color); */
  padding: 0.5rem 1rem;
}
`;

export default GlobalStyle;
