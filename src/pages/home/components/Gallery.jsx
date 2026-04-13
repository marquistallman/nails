import React, { useState } from 'react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const designs = [
    { id: 1, category: 'gel', title: 'Gel Rosado Nude', image: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, category: 'nail-art', title: 'Flores Minimalistas', image: 'https://images.unsplash.com/photo-1736434518489-0eb84070017f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, category: 'acrylic', title: 'Acrílicas Glamour', image: 'https://images.unsplash.com/photo-1688583417770-ff6cc18071dc?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, category: 'nail-art', title: 'Efecto Espejo Gold', image: 'https://plus.unsplash.com/premium_photo-1670590820777-3b03f589cb89?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, category: 'gel', title: 'Degradado Rosa', image: 'https://plus.unsplash.com/premium_photo-1723460945050-25a6ea790e17?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, category: 'classic', title: 'Rojo Brillante', image: 'https://cdn.pixabay.com/photo/2018/02/18/11/05/the-hand-3161974_1280.jpg' },
    { id: 7, category: 'nail-art', title: 'Diseño Mármol', image: 'https://cdn.pixabay.com/photo/2024/10/20/04/53/nails-9134036_1280.png' },
    { id: 8, category: 'acrylic', title: 'Acrílicas Largas', image: 'https://cdn.pixabay.com/photo/2020/10/14/07/03/nail-art-5653459_1280.jpg' }
  ];

  const categories = [
    { id: 'all', label: 'Todo' },
    { id: 'gel', label: 'Gel' },
    { id: 'nail-art', label: 'Nail Art' },
    { id: 'acrylic', label: 'Acrílicas' },
    { id: 'classic', label: 'Clásicas' }
  ];

  const filtered = selectedCategory === 'all' ? designs : designs.filter(d => d.category === selectedCategory);

  return (
    <section id="galeria" className="section-gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Nuestro Trabajo</span>
          <h2>Galería de Diseños</h2>
          <p>Inspiración y creatividad en cada uña</p>
        </div>

        <div className="gallery-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map(design => (
            <div key={design.id} className="gallery-item">
              <div className="gallery-image">
                <img src={design.image} alt={design.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="gallery-overlay">
                  <h3>{design.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
