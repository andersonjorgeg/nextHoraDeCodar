import Link from 'next/link';

export default function Products() {
  return (
    <div>
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
  )
}