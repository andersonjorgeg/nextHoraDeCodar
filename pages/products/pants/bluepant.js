import Link from 'next/link'

import styles from '../../../styles/Pants.module.css';
export default function BluePant() {
  return (
    <div className={styles.container}>
        <h1>Calça azul - R$99,99</h1>
      <section className={styles.section}>
        <Link href="/products/pants">
          <a className={styles.botao}>Volta</a>
        </Link>
      </section>
    </div>
  ); 
}