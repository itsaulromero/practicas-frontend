export interface Product {
  id: number
  image: string
  title: string
  description: string
  price: number
  button: string
}

export const products: Product[] = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/headphones/640/400',
    title: 'Wireless Headphones',
    description: 'Auriculares inalámbricos con sonido de alta calidad.',
    price: 89.99,
    button: 'View product',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/keyboard/640/400',
    title: 'Mechanical Keyboard',
    description: 'Teclado mecánico compacto para trabajo y gaming.',
    price: 119.99,
    button: 'View product',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/mouse/640/400',
    title: 'Wireless Mouse',
    description: 'Ratón inalámbrico ergonómico y ligero.',
    price: 49.99,
    button: 'View product',
  },
]