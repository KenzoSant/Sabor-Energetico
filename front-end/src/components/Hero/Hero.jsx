import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '../../assets/assets';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const comp = useRef(null);
  const terraRef = useRef(null);
  const pessoaRef = useRef(null);

  // Função para scroll suave até a seção products
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Entrance Animations
      tl.from(".hero-content > *", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
        delay: 0.5
      })
      .from([terraRef.current, pessoaRef.current], {
        y: 300,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "power3.out"
      }, "-=1.2");

    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={comp} className="hero-section" style={{ backgroundImage: `url(${assets.lua})` }}>

      {/* TERRA/SOLO - Base da imagem */}
      <img
        ref={terraRef}
        src={assets.terra}
        alt="Terra"
        className="hero-terra"
      />

      <div className="container hero-container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-content">
          <h4 className="text-gold hero-subtitle-top">
            A bebida do rolê mais insano do Brasil
          </h4>
          <h1 className="text-gradient hero-title">
            SABOOOOOR <br /> ENERGÉTICO
          </h1>
          <p className="hero-description">
            A Mansão Maromba agora em sua versão mais refinada. Descubra nossa linha de Wisk, Gin e Vodkas feitas para quem não aceita o comum.
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToProducts} className="btn btn-primary">Ver Produtos</button>
            <button className="btn btn-outline">Onde Comprar</button>
          </div>
        </div>
      </div>

      {/* PESSOA - No centro, sobrepondo a lua */}
      <img
        ref={pessoaRef}
        src={assets.pessoa}
        alt="Pessoa"
        className="hero-pessoa"
      />
    </section>
  );
};

export default Hero;