import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';
import ProductPage from './products/[id]/page';

// Função que busca os dados da sua API
async function getProducts(): Promise<Product[]> {
  const response = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store' // Garante que pegaremos dados frescos sempre
  });

  if (!response.ok) {
    throw new Error('Falha ao buscar produtos');
  }

  return response.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main style={{ padding: '20px' }}>
      <h1>Minha Loja</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}