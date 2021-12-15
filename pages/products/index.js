import Link from 'next/link';
import { Navbar } from '../../components/Navbar';

export default function Products() {
  return (
    <div>
      <Navbar />
      <h1>Produtos</h1>
      <ul>
        <li>
          <Link href="/products/pants"><a>Calças</a></Link>
        </li>
      </ul>
    </div>  
  )
}