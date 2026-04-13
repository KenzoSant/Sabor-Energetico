import React, { useEffect } from 'react';
import { bebidasList } from '../../assets/assets';
import './AllProducts.css';

const AllProducts = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when this screen loads
  }, []);

  return (
    <div className="all-products-page">
      <div className="container">
        <header className="all-products-header">
          <button onClick={onBack} className="btn-back">
            <span>&#8592;</span> Voltar
          </button>
          <div className="header-titles">
            <h4 className="text-gold">COLEÇÃO COMPLETA</h4>
            <h1 className="title-large">Todas as Bebidas</h1>
          </div>
        </header>

        <main className="all-products-grid">
          {bebidasList.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imagem} alt={product.nome} className="product-image" />
              <div className="product-info">
                <h3>{product.nome}</h3>
                <p>{product.flavor || "Edição Especial"}</p>
              </div>
              <button className="btn btn-primary-small">Comprar</button>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default AllProducts;
