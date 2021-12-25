import Link from 'next/link';
import styles from '../../styles/Products.module.css';
import Head from 'next/head'

export default function Products() {
  return (
    <>
      <Head>
        <title>Produtos</title>
      </Head>
      <div className={styles.container}>
        <h1>Produtos</h1>
        <ul>
          <li>
            <Link href="/products/pants"><a>Calças</a></Link>
          </li>
          <li>
            <Link href="/products/shirts"><a>Camisas</a></Link>
          </li>
        </ul>
      </div> 
    </>
  )
}