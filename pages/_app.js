import '../styles/globals.css'

// pageProps é o objeto que vem do Next.js
// Component é o componente que será renderizado
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
