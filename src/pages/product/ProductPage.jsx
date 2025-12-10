import { products } from '../../data/products'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ProductGrid } from './ProductGrid'
import './ProductPage.css'

export function ProductPage({cart, increaseQuantity, decreaseQuantity, removeItem}) {
  return (
    <>
      <title>Product</title>
      <Header cart= {cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem}></Header>
      <div className="products">
        <div className="products-header">
          <h1>Products</h1>
          <p>Browse our collection of high-quality items at affordable prices.</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductGrid key= {product.id} product={product} increaseQuantity={increaseQuantity}></ProductGrid>
          ))}
        </div>

        <Footer></Footer>
      </div>
    </>
  )
}