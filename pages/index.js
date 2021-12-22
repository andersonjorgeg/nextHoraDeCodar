import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal</title>
        <meta name="keywords" content="Roupas, Calçados, Boné" />
        <meta name="description" content="Site de venda de roupas e calçados" />
      </Head>
      <div>
      <h1 className={styles.title}>Hello World</h1>
      <Image 
        src="/images/city.jpg" 
        width="350" 
        height="450" 
        alt="cidade a noite" 
      />
    </div>
    </>
  )
}
