import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Notebook Gamer",
    description: "Notebook gamer de alta performance com placa de vídeo dedicada e processador de última geração.",
    price: 4999.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
    category: "Eletrônicos",
    inStock: true,
  },
  {
    id: "2",
    name: "Smartphone Pro",
    description: "Smartphone com câmera tripla, tela AMOLED e bateria de longa duração.",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
    category: "Eletrônicos",
    inStock: true,
  },
  {
    id: "3",
    name: "Fone de Ouvido Wireless",
    description: "Fone de ouvido com cancelamento de ruído ativo e bateria de 30 horas.",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Áudio",
    inStock: true,
  },
  {
    id: "4",
    name: "Smartwatch",
    description: "Relógio inteligente com monitoramento de saúde e GPS integrado.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Acessórios",
    inStock: false,
  },
  {
    id: "5",
    name: "Tablet Pro",
    description: "Tablet com tela de 12 polegadas, ideal para trabalho e entretenimento.",
    price: 3499.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
    category: "Eletrônicos",
    inStock: true,
  },
  {
    id: "6",
    name: "Teclado Mecânico",
    description: "Teclado mecânico RGB com switches Cherry MX e design ergonômico.",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
    category: "Periféricos",
    inStock: true,
  },
];

