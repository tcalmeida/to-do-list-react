import { createGlobalStyle } from 'styled-components';
import img from '../assets/images/w4.jpg';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-size: 100% 100%;
  font-family: 'Bebas Neue', cursive;
  
}
`;
