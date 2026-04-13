import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ProductGrid from './components/ProductGrid/ProductGrid'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import About from './components/About/About'
import AllProducts from './components/AllProducts/AllProducts'
import './App.css'

function App() {
  const [showAllProducts, setShowAllProducts] = useState(false);

  return (
    <div className="app">
      <CustomCursor />
      <SmoothScroll />
      <Navbar isAllProducts={showAllProducts} onGoHome={() => setShowAllProducts(false)} />
      
      <main>
        {showAllProducts ? (
          <AllProducts onBack={() => setShowAllProducts(false)} />
        ) : (
          <>
            <Hero />
            <About />
            <ProductGrid onNavigateAllProducts={() => setShowAllProducts(true)} />

            <section id="cta" style={{ textAlign: 'center', padding: '150px 0', background: 'linear-gradient(to bottom, var(--bg-deep), #1a1a1a)' }}>
                <div className="container">
                    <h1 style={{ fontSize: 'clamp(32px, 6vw, 72px)', marginBottom: '40px' }}>Pronto para o próximo <span className="text-gold">NÍVEL?</span></h1>
                    <button className="btn btn-primary" style={{ padding: '20px 50px', fontSize: '18px' }}>Garantir meu Pack</button>
                </div>
            </section>
          </>
        )}
      </main>

      <footer id='footer' style={{ padding: '60px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-deep)' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>© 2026 Mansão Maromba. Todos os direitos reservados.</p>
              <div style={{ display: 'flex', gap: '30px' }}>
                  <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px' }}>Privacidade</a>
                  <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px' }}>Termos</a>
                  <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px' }}>Instagram</a>
              </div>
          </div>
      </footer>
    </div>
  )
}

export default App
