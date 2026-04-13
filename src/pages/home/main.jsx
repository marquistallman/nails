import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Initialize scroll animations
if (typeof window !== 'undefined') {
  setTimeout(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          // Add specific delay animations
          if (entry.target.classList.contains('service-card')) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
          } else if (entry.target.classList.contains('gallery-item')) {
            entry.target.style.animation = 'scaleIn 0.8s ease-out forwards';
          } else if (entry.target.classList.contains('testimonial-card')) {
            entry.target.style.animation = 'fadeInLeft 0.8s ease-out forwards';
          } else if (entry.target.classList.contains('section-services') ||
                     entry.target.classList.contains('section-gallery') ||
                     entry.target.classList.contains('section-contact')) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all service cards, gallery items, testimonials, and main sections
    document.querySelectorAll('.service-card, .gallery-item, .testimonial-card, .section-services, .section-gallery, .section-contact, .map-container').forEach(el => {
      el.classList.add('fade-in-section');
      observer.observe(el);
    });
  }, 500);
}
