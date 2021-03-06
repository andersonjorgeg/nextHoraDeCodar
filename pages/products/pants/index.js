import Link from 'next/link'
import styles from '../../../styles/Pants.module.css';
import Head from 'next/head'

export default function Pants() {
  return (
    <>
      <Head>
        <title>Calças</title>
      </Head>
    <div className={styles.container}>
      <h1>Calças</h1>
      <section className={styles.section}>
        <Link href="/products/pants/redpant">
          <a className={styles.botao}>Calça Vermelha</a>
        </Link>
        <Link href="/products/pants/bluepant">
          <a className={styles.botao}>Calça azul</a>
        </Link>
        <Link href="/products">
          <a className={styles.botao}>Voltar</a>
        </Link>
      </section>
    </div>
    </>
  );
}