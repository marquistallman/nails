import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `¡Hola! Me gustaría agendar una cita.\n\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nServicio: ${formData.service}\nFecha preferida: ${formData.date}\nMensaje: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contacto" className="section-contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="section-header">
              <span className="section-badge">Contáctanos</span>
              <h2>Tu Próxima Cita Comienza Aquí</h2>
              <p>Estamos listos para darte una experiencia inolvidable</p>
            </div>

            <div className="contact-details">
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <div>
                  <h4>Ubicación</h4>
                  <p>Av. Principal 123<br />Centro Comercial Beauty<br />Bogotá, Colombia</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon">⏰</span>
                <div>
                  <h4>Horarios</h4>
                  <p>Lun - Vie: 9:00 AM - 8:00 PM<br />Sab: 10:00 AM - 6:00 PM<br />Dom: 12:00 PM - 5:00 PM</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon">📱</span>
                <div>
                  <h4>Contacto</h4>
                  <p><a href="tel:+573001234567">+57 300 123 4567</a><br /><a href="mailto:hola@nailstudio.com">hola@nailstudio.com</a></p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Tu teléfono"
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Servicio Deseado</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un servicio</option>
                <option value="Manicura Classic">Manicura Classic</option>
                <option value="Gel Manicure">Gel Manicure</option>
                <option value="Nail Art Diseño">Nail Art Diseño</option>
                <option value="Uñas Acrílicas">Uñas Acrílicas</option>
                <option value="Pedicura Deluxe">Pedicura Deluxe</option>
                <option value="Mantenimiento">Mantenimiento</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date">Fecha Preferida</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje (Opcional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Cuéntanos más sobre lo que buscas"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
