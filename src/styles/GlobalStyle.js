import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin:0;
  box-sizing: border-box;
  transition: all 0.3s ease;
  font-family: 'Oswald', sans-serif;
}
:root {
  --orange-color: #E58F26;
  --purple-color: #88459A;
  --main-black-color: #222222;
  --main-white-color: #ffffff;
  --main-bg-color: #f2f2f2;
}
html {
  font-size: 16px;
}
body {
  background-color: var(--main-bg-color);
}
h1{
  color: var(--main-black-color);
  text-shadow: 0 0 15px var(--main-white-color);
  font-size: 2.5rem;
}
a, a:hover, a:visited {
  color: inherit;
  text-decoration: inherit;
}
button:disabled, select:disabled, input:disabled {
  opacity: 0.4;
  &:hover {
    cursor: auto;
  }
}


`;

export default GlobalStyle;
