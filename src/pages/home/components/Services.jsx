import React, { useState } from 'react';

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Manicura Classic",
      description: "Limpieza, corte y esmalte de calidad premium",
      duration: "45 min",
      price: "$35",
      icon: "💅"
    },
    {
      id: 2,
      name: "Gel Manicure",
      description: "Esmalte gel duradero con acabado brillante",
      duration: "1 hora",
      price: "$55",
      icon: "✨"
    },
    {
      id: 3,
      name: "Nail Art Diseño",
      description: "Diseños personalizados y únicos para tus uñas",
      duration: "1.5 - 2 hrs",
      price: "$65+",
      icon: "🎨"
    },
    {
      id: 4,
      name: "Uñas Acrílicas",
      description: "Extensiones acrílicas con acabado profesional",
      duration: "2 - 2.5 hrs",
      price: "$75+",
      icon: "💎"
    },
    {
      id: 5,
      name: "Pedicura Deluxe",
      description: "Spa completo para tus pies con masaje relajante",
      duration: "1.5 hrs",
      price: "$60",
      icon: "🦶"
    },
    {
      id: 6,
      name: "Mantenimiento",
      description: "Retoque y mantenimiento de servicios anteriores",
      duration: "30 - 45 min",
      price: "$25+",
      icon: "🔄"
    }
  ];

  return (
    <section id="servicios" className="section-services">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Nuestros Servicios</span>
          <h2>Experiencias Personalizadas</h2>
          <p>Cada uña es un lienzo en blanco para crear tu estilo perfecto</p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-info">
                <span className="duration">⏱ {service.duration}</span>
                <span className="price">{service.price}</span>
              </div>
              <a href="#contacto" className="service-cta">Reservar</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
