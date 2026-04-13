import React, { useState } from 'react';

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="hero-background"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-badge">✨ Belleza en tus manos</span>
          <h1>Uñas que Cuentan tu Estilo</h1>
          <p>Diseños personalizados con productos premium. Transforma tus uñas en una obra de arte.</p>
          <div className="hero-buttons">
            <a href="#contacto" className="btn btn-primary">Agenda tu Cita</a>
            <a href="#servicios" className="btn btn-secondary">Ver Servicios</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Diseño de uñas profesional" className="hero-img" />
        </div>
      </div>
    </section>
  );
}
