import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets, bestSellers, premiumLines, newArrivals } from '../../assets/assets';
import './ProductGrid.css';

gsap.registerPlugin(ScrollTrigger);

const ProductSlider = ({ items, className = "" }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const trackRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Reset page if resizing reduces total pages
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [totalPages, currentPage]);

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
    // xPercent is relative to the track's own width
    // Track width = (items.length / itemsPerPage) * 100% of container
    // To shift by 1 container width = (itemsPerPage / items.length) * 100% of track
    const movePercent = (pageIndex * itemsPerPage * 100) / items.length;
    gsap.to(trackRef.current, {
      xPercent: -movePercent,
      duration: 0.8,
      ease: "power2.inOut"
    });
  };

  // Track width: enough to hold all items at the correct size
  const trackWidthPercent = (items.length / itemsPerPage) * 100;
  // Each item width as percentage of the track
  const itemWidthPercent = 100 / items.length;

  return (
    <div className={`product-slider-container ${className}`}>
      <div className="slider-overflow">
        <div
          className="slider-track"
          ref={trackRef}
          style={{ width: `${trackWidthPercent}%` }}
        >
          {items.map((product) => (
            <div
              key={product.id}
              className="slider-item"
              style={{ width: `${itemWidthPercent}%` }}
            >
              <div className="product-card">
                <img src={product.imagem} alt={product.nome} className="product-image" />
                <div className="product-info">
                  <h3>{product.nome}</h3>
                  <p>{product.flavor}</p>
                </div>
                <button className="btn btn-primary-small">Comprar</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores */}
      <div className="slider-dots">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`dot ${i === currentPage ? 'active' : ''}`}
            onClick={() => goToPage(i)}
          ></button>
        ))}
      </div>
    </div>
  );
};

const ProductGrid = ({ onNavigateAllProducts }) => {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animação dos Títulos da Seção
      const headers = gsap.utils.toArray('.section-header');
      headers.forEach((header) => {
        const titles = header.querySelectorAll('h4, h2');
        if (titles.length > 0) {
          gsap.from(titles, {
            scrollTrigger: {
              trigger: header,
              start: "top 85%",
            },
            y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "back.out(1.7)"
          });
        }
      });

      // Animação dos Cards Premium
      const premiumCards = gsap.utils.toArray('.premium-card');
      if (premiumCards.length > 0) {
        gsap.from(premiumCards, {
          scrollTrigger: {
            trigger: ".premium-grid",
            start: "top 70%",
          },
          scale: 0.9,
          opacity: 0,
          y: 40,
          stagger: 0.3,
          duration: 1.2,
          ease: "power4.out"
        });
      }

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={container} className="products-section">
      <div className="container">

        {/* MAIS VENDIDOS */}
        <div className="product-category-block">
          <div className="section-header">
            <h4 className="text-gold">OS FAVORITOS</h4>
            <h2 className="title-large">Mais Vendidos</h2>
          </div>
          <ProductSlider items={bestSellers} />
        </div>

        {/* LINHAS PREMIUM */}
        <div className="product-category-block premium-block">
          <div className="section-header centered">
            <h4 className="text-gold">EXCLUSIVIDADE</h4>
            <h2 className="title-large">Linhas Premium</h2>
          </div>
          <div className="premium-grid">
            {premiumLines.map(line => (
              <div key={line.id} className="premium-card">
                <img src={line.imagem} alt={line.nome} className="premium-bg-image" />
                <div className="premium-content">
                  <h3>{line.nome}</h3>
                  <p>{line.flavor}</p>
                  <button className="btn-link">EXPLORAR LINHA</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LANÇAMENTOS */}
        <div className="product-category-block">
          <div className="section-header">
            <h4 className="text-gold">NOVIDADES</h4>
            <h2 className="title-large">Lançamentos</h2>
          </div>
          <ProductSlider items={newArrivals} />
        </div>

        {/* BOTÃO VER TODAS AS BEBIDAS */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button 
            className="btn btn-primary" 
            style={{ padding: "15px 40px", fontSize: "16px" }}
            onClick={onNavigateAllProducts}
          >
            Ver Todas as Bebidas
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;
