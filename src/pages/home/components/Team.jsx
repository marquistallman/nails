import React, { useState } from 'react';

export default function Team() {
  const testimonials = [
    {
      id: 1,
      name: 'Sofia García',
      service: 'Gel Manicure',
      rating: 5,
      text: '¡Increíble! Las chicas son muy profesionales y el ambiente es súper relajante. Mis uñas se ven hermosas.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'María López',
      service: 'Nail Art Diseño',
      rating: 5,
      text: 'El diseño que pedí quedó perfecto. La atención al detalle es impresionante. Voltearé a volver.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Valentina Rojas',
      service: 'Uñas Acrílicas',
      rating: 5,
      text: 'Mis acrílicas lucen premium. Duran mucho y el color es exactamente lo que quería. ¡Muy recomendado!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    {
      id: 4,
      name: 'Julia Martínez',
      service: 'Pedicura Deluxe',
      rating: 5,
      text: 'El masaje de pedicura fue lo mejor. Me relajé completamente. Ambiente tranquilo y limpio.',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop'
    }
  ];

  return (
    <section className="section-testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Lo que Dicen</span>
          <h2>Testimonios de Nuestras Clientas</h2>
          <p>La satisfacción de nuestras clientas es nuestro mayor éxito</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p className="service-name">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-footer">
          <p className="rating-summary">⭐ Más de 150 opiniones · Calificación 4.9</p>
          <a href="#contacto" className="btn btn-primary">Deja tu opinión</a>
        </div>
      </div>
    </section>
  );
}
