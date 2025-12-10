import { NavLink, Link } from 'react-router';
import { useState } from 'react';
import { formatMoney } from '../utils/money';
import './Header.css';

export function Header( {cart, increaseQuantity, decreaseQuantity, removeItem} ) {
  const [activeDrawer, setActiveDrawer] = useState(null); // 'cart' | 'menu' | null
  const closeDrawer = () => setActiveDrawer(null);

  return (
    <div className="header">
      {/* Logo */}
      <div className="header-logo">
        <Link to="/">
          <img src="demo.png" alt="" className="header-logo-image" />
        </Link>
      </div>

      {/* 导航链接 */}
      <div className="header-nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Products</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>

      {/* Cart & Hamburger 图标 */}
      <div className="cart-hamburger-icon">
        <img
          src="cart-icon.png"
          alt=""
          className="cart-icon"
          onClick={() =>
            setActiveDrawer(activeDrawer === 'cart' ? null : 'cart')
          }
        />
        <img
          src="hamburger-icon.png"
          className={`hamburger ${activeDrawer === 'menu' ? 'active' : ''}`}
          onClick={() =>
            setActiveDrawer(activeDrawer === 'menu' ? null : 'menu')
          }
          aria-label="Toggle menu"
        />
      </div>

      {/* Drawer */}
      <div className={`drawer ${activeDrawer ? 'open' : ''}`}>
        <button className="close" onClick={closeDrawer}>
          ✕
        </button>

        {/* Cart Drawer */}
        {activeDrawer === 'cart' && (
          <div className="cart-container">
            <h3>Your Cart</h3>
            {cart.length === 0 && <p>Cart is empty</p>}
            {cart.map((cartItem) => (
              <div key={cartItem.product.id} className="cart-item-container">
                <div className="cart-item-image">
                  <img src={cartItem.product.image} alt="product image" className="cart-item-image"/>
                </div>
                <div className="cart-item-name">{cartItem.product.name}</div>
                <div className="cartItem-product-price">
                  {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="cart-item-quantity">
                  <button className="add-item-quantity" onClick={() => {decreaseQuantity(cartItem.product)}}>-</button>
                  {cartItem.quantity}
                  <button className="add-item-quantity" onClick={()=> {increaseQuantity(cartItem.product)}} >+</button>
                  <button className="remove-item" onClick={() => removeItem(cartItem.product)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <button className="checkout">Checkout</button>
          </div>
        )}

        {/* Menu Drawer */}
        {activeDrawer === 'menu' && (
          <nav className="drawer-menu">
            <NavLink to="/" onClick={closeDrawer}>
              Home
            </NavLink>
            <NavLink to="/products" onClick={closeDrawer}>
              Products
            </NavLink>
            <NavLink to="/about" onClick={closeDrawer}>
              About Us
            </NavLink>
            <NavLink to="/contact" onClick={closeDrawer}>
              Contact Us
            </NavLink>
          </nav>
        )}
      </div>

      {/* 背景遮罩 */}
      {activeDrawer && <div className="backdrop" onClick={closeDrawer}></div>}
    </div>
  );
}
