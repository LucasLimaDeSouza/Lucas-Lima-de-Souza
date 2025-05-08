import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

    }

    * {
    
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        
        text-decoration: none;
        font-size: 16px;
        font-weight: medium;
    }



  body {

    /* height: 100vh; */
    margin: 0;
    padding: 0;
    
    
  }
`;

export default GlobalStyles;