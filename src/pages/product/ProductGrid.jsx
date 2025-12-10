import { formatMoney } from "../../utils/money"
import { useState } from 'react'

export function ProductGrid({ product, increaseQuantity }) {
  const [showMessage, setShowMessage] = useState(false);

  function saveMessageStatus(product) {
    increaseQuantity(product);
    if (showMessage === false) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 1000)
    }
  }

  return (
    <>
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p className="price">{formatMoney(product.priceCents)}</p>
        <div className="added-to-cart" style={{ opacity: showMessage ? 1 : 0 }}>
          <img src="images/icons/checkmark.png" className="checkmark-icon" />
          Added
        </div>
        <button onClick={() => saveMessageStatus(product)}>Add to Cart</button>
      </div>
    </>
  )
}