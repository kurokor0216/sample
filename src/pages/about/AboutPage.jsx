import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import './AboutPage.css'

export function AboutPage({ cart, increaseQuantity, decreaseQuantity, removeItem }) {
  return (
    <>
      <Header cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem}></Header>
      <main className="about">
      <section className="about-header">
        <h1>About Us</h1>
        <p>
          We are a small team dedicated to delivering high-quality products and exceptional customer service.
          Our mission is to provide our customers with an exceptional shopping experience and products they will love.
        </p>
      </section>

      <section className="about-values">
        <h2>What We Value</h2>
        <ul>
          <li><strong>Customer Satisfaction:</strong> We listen, respond, and improve based on real feedback.</li>
          <li><strong>Integrity:</strong> Honest pricing, transparent policies, and ethical sourcing.</li>
          <li><strong>Innovation:</strong> We refine every detail—from layout to cart logic—to make shopping feel effortless.</li>
        </ul>
      </section>

      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2024, our store was born from a passion for clean design and practical user experience.
          We started by building interfaces that feel intuitive and scalable, and we continue to iterate with every release.
        </p>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="vite.svg" alt="Employee 1" />
            <h3>Employee 1</h3>
            <p>Front-end developer with a designer’s eye for gradients and responsive layout logic.</p>
          </div>
          <div className="team-card">
            <img src="vite.svg" alt="Employee 2" />
            <h3>Employee 2</h3>
            <p>UX strategist focused on clarity, accessibility, and visual polish.</p>
          </div>
          <div className="team-card">
            <img src="vite.svg" alt="Employee 3" />
            <h3>Employee 3</h3>
            <p>State logic engineer ensuring smooth cart transitions and scalable component architecture.</p>
          </div>
        </div>
      </section>
      </main>
      <Footer></Footer>
    </>
  )
}