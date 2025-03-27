import { createGlobalStyle } from 'styled-components'
import backgroundImage from './assets/images/background.jpg'

export const colors = {
  white: '#F2F0C9',
  darkGray: '#262626',
  lightGray: '#595959'
}

const GlocalCss = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Wix Madefor Display', sans-serif;
    color: ${colors.white}
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-image: url(${backgroundImage});
    background-size: contain;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  .centralizer {
    max-width: 80rem;
    width: 100%;
    margin: 10rem auto 0;
    border-radius: 1rem;
    box-shadow: 2rem 2rem 3rem black;
    background-color: ${colors.darkGray};
  }
`

export default GlocalCss
