import React from 'react'

const Footer = () => {
  return (
      <>
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="../src/assets/logo.png" alt="Travel Trail Logo" className="footer-logo-img"/>
                </div>
                <div className="footer-contact">
                    <p>Contact Us</p>
                    <p><i className="fas fa-phone"></i> +123 456 7890</p>
                    <p><i className="fas fa-envelope"></i> contact@traveltrail.com</p>
                </div>
                <div className="footer-social">
                    <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer