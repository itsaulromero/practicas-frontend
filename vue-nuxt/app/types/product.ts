export interface Product {
  id: number
  title: string
  price: number
  description: string
  thumbnail: string
  category: string
}

export interface ProductsResponse {
  products: Product[]
}