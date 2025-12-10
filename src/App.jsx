import { HomePage } from './pages/home/HomePage'
import { ProductPage } from './pages/product/ProductPage' 
import { ContactPage } from './pages/contact/ContactPage'
import { AboutPage } from './pages/about/AboutPage' 
import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function increaseQuantity(product) {
    const existing = cart.find((item) => item.product.id === product.id);

    if (!existing) {
      setCart([...cart, { product, quantity: 1 }]);
    } else {
      const newCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(newCart);
    }
  }

  function decreaseQuantity(product) {
    const existing = cart.find((item) => item.product.id === product.id);

    if (existing.quantity === 1) {
      const newCart = cart.filter((item) => item.product.id !== product.id);
      setCart(newCart);
    } else {
      const newCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCart(newCart);
    }
  }

  function removeItem(product)
  {
    const newCart = cart.filter((cartItem) => cartItem.product.id !== product.id);
    setCart(newCart);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem}></HomePage>}></Route>
        <Route path="/product" element={<ProductPage cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem}></ProductPage>}></Route>
        <Route path="/about" element={<AboutPage cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem}></AboutPage>}></Route>
        <Route path="/contact" element={<ContactPage cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem}></ContactPage>}></Route>
      </Routes>
    </>
  )
}

export default App
