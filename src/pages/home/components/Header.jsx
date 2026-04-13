import React, { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-wrapper">
        <div className="logo">
          <span className="logo-icon">💅</span>
          <span className="logo-text">NailStudio</span>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <a href="#hero" className="nav-link">Inicio</a>
          <a href="#servicios" className="nav-link">Servicios</a>
          <a href="#galeria" className="nav-link">Galería</a>
          <a href="#contacto" className="nav-link">Contacto</a>
          <a href="#contacto" className="btn btn-primary nav-btn">Agendar Cita</a>
        </nav>
      </div>
    </header>
  );
}
