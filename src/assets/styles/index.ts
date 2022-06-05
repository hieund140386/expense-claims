import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
  }
  body {
    background: #ccc;
    padding: 0 10px;
  }
`