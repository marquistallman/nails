import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>NailStudio</h4>
            <p>Tu salón especializado en nail art y diseños personalizados para uñas hermosas y saludables.</p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📱 Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">👍 Facebook</a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#galeria">Galería</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Horarios</h4>
            <p>Lun - Vie: 9:00 AM - 8:00 PM</p>
            <p>Sábado: 10:00 AM - 6:00 PM</p>
            <p>Domingo: 12:00 PM - 5:00 PM</p>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <p><a href="tel:+573001234567">📞 +57 300 123 4567</a></p>
            <p><a href="mailto:hola@nailstudio.com">📧 hola@nailstudio.com</a></p>
            <p>📍 Av. Principal 123, Bogotá</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} NailStudio. Todos los derechos reservados. | <a href="#">Política de Privacidad</a> | <a href="#">Términos de Servicio</a></p>
        </div>
      </div>
    </footer>
  );
}
