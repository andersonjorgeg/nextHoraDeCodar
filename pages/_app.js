import '../styles/globals.css'
import MainContainer from '../components/MainContainer';

// pageProps é o objeto que vem do Next.js
// Component é o componente que será renderizado
function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
