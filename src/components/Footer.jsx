import { Link } from 'react-router'
import './Footer.css'

export function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <Link to="/"><img src="demo.png" alt="" className="footer-logo-image" /></Link>
          </div>

          <div className="footer-page-list">
            <h3>Page</h3>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-contact-info">
            <h3>More Contact Infomation</h3>
            <p>Email: demo-project@gmail.com</p>
            <p>Address: 1-02 & 1-01 (Level 1), Menara Akamiru 6, Jalan Mugiwara, Damansara Super, 53333 Kuala Lumpur</p>
          </div>
        </div>
        <p className="copy-right-text">© 2025 MyDemoProjectSite All rights reserved.</p>
      </div>
    </>
  )
}