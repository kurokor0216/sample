import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { products } from '../../data/products'
import { FeatureGrid } from './FeatureGrid'
import './HomePage.css'

export function HomePage({ cart, increaseQuantity, decreaseQuantity, removeItem }) {
  
  return (
    <>
      <title>Home</title>
      <Header cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem}></Header>
      <div className="content-container">
        <div className="hero-banner">
          <img src="cloth-banner.png" alt="" className="cloth-banner-image" />
        </div>
        <div className="features-product-container">
          <h2 className="feature-title">Feature Products</h2>
          <div className="product-grid">
            {products.slice(0, 6).map((product) => (
              <FeatureGrid key={product.id} product={product} increaseQuantity={increaseQuantity} ></FeatureGrid>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>

  )
}