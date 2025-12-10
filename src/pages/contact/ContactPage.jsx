import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import './ContactPage.css'

export function ContactPage({ cart, increaseQuantity, decreaseQuantity, removeItem }) {
  return (
    <>
      <Header cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem}></Header>
      <main className="contact">
        <section className="contact-header">
          <h1>Get In Touch With Us</h1>
          <p>We’d love to hear from you. Fill out the form and we’ll get back to you shortly.</p>
        </section>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send</button>
        </form>
      </main>
      <Footer></Footer>
    </>
  )
}