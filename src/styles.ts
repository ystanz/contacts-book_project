import { createGlobalStyle } from 'styled-components'
import backgroundImage from './assets/images/background.jpg'

export const colors = {
  white: '#F2F0C9',
  darkGray: '#262626',
  lightGray: '#595959',
  editIcon: '#deba6f',
  removeIcon: '#823038'
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
    max-width: 88rem;
    width: 100%;
    margin: 5.6rem auto 0;
    padding: 0 4.8rem;
    border-radius: 1rem;
    box-shadow: 2rem 2rem 3rem black;
    background-color: ${colors.darkGray};
  }

  @media (max-width: 767px) {
    .centralizer {
      width: 90%;
      padding: 0 .8rem;
      margin: 3.2rem auto 0;
    }
  }
`

export default GlocalCss
