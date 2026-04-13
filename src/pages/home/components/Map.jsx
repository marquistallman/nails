import React, { useEffect, useState } from 'react';

export default function Map() {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    // Detect when map section is in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('map-container');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div id="map-container" className="map-container fade-in-section">
      <h3>Nos Encuentras Aquí</h3>
      {showMap && (
        <iframe
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '20px' }}
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4862095563765!2d-74.072877!3d4.710989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9d5a5a5a5a5b%3A0x5a5a5a5a5a5a5a5a!2sAv.%20Cra.%209%20%23114-07%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1234567890"
        ></iframe>
      )}
    </div>
  );
}
