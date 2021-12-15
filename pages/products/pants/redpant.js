import Link from 'next/link'

import styles from '../../../styles/Pants.module.css';
export default function RedPant() {
  return (
    <div className={styles.container}>
        <h1>Calça vermelha - R$89,99</h1>
      <section className={styles.section}>
      <Link href="/products/pants">
          <a className={styles.botao}>Volta</a>
      </Link>
      </section>
    </div>
  ); 
}