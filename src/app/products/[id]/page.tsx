import { notFound } from "next/navigation";

// Definição do tipo para o Next.js 15
interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const product = await res.json();

  return (
    <main className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-black p-6 gap-10">
      
      {/* Informações do produto */}
      <div className="flex-1 max-w-md bg-white p-8 rounded-xl shadow-lg border-l-8 border-green-800">
        <h1 className="text-4xl font-extrabold text-green-800 mb-4">{product.name}</h1>
        <p className="text-gray-700 text-lg mb-6">{product.description}</p>
        <span className="text-2xl font-bold text-green-600">R$ {product.price}</span>
      </div>

      {/* Imagem do produto */}
      <div className="flex-1 max-w-md rounded-xl overflow-hidden shadow-lg border-4 border-green-300">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

    </main>
  );
}
