import Link from 'next/link'

import styles from '../../../styles/Pants.module.css';
export default function RedPant() {
  return (
    <div className={styles.container}>
        <h1>Camisa vermelha - R$89,99</h1>
      <section className={styles.section}>
      <Link href="/products/shirts">
          <a className={styles.botao}>Volta</a>
      </Link>
      </section>
    </div>
  ); 
}
