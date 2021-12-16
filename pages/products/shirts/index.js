import Link from 'next/link'
import styles from '../../../styles/Pants.module.css';

export default function Shirts() {
  return (
    <div className={styles.container}>
      <h1>Camisas</h1>
      <section className={styles.section}>
        <Link href="/products/shirts/redshirt">
          <a className={styles.botao}>Camisa Vermelha</a>
        </Link>
        <Link href="/products/shirts/blueshirt">
          <a className={styles.botao}>Camisa azul</a>
        </Link>
        <Link href="/products">
          <a className={styles.botao}>Voltar</a>
        </Link>
      </section>
    </div>
  );
}
