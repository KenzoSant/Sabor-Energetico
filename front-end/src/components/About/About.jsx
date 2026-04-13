import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '../../assets/assets';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  const col1Images = [assets.pessoa, assets.bebida_gin2, assets.bebida_latinha1, assets.bebida5, assets.bebida1];
  const col2Images = [assets.bebida2, assets.bebida_garrafa1, assets.bebida_latinha2, assets.bebida_gin3, assets.bebida9];
  const col3Images = [assets.bebida3, assets.bebida_latinha3, assets.pessoa, assets.bebida_gin5, assets.bebida6];
  const col4Images = [assets.bebida_gin1, assets.bebida4, assets.bebida7, assets.pessoa, assets.bebida_gin9];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Revelação do conteúdo
      gsap.from(".about-content > *", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });

      // Parallax Grid animation
      gsap.to('.column-up', {
        yPercent: -25,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });

      gsap.to('.column-down', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about-sectionContainer about-section">
      <div className="container about-grid">
        <div className="about-content">
          <h2 className="text-gold about-subtitle">Mansão Maromba</h2>
          <h1 className="about-title">SOBRE A MARCA</h1>
          <p className="about-text">
            A Mansão Maromba nasceu para quebrar o padrão.
            Criada dentro de um dos maiores movimentos de conteúdo fitness e entretenimento do Brasil, a marca virou referência em atitude, liberdade e lifestyle.
            <br />
            O objetivo nunca foi ser só mais uma bebida é criar experiências, momentos e histórias.
          </p>
          <ul className="about-list">
            <li className="about-list-item">
              <span className="about-list-dot"></span>
              Ingredientes de Elite
            </li>
            <li className="about-list-item">
              <span className="about-list-dot"></span>
              Sabor Marcante & Refinado
            </li>
            <li className="about-list-item">
              <span className="about-list-dot"></span>
              A verdadeira essência Inexplicável
            </li>
          </ul>
        </div>
        <div className="parallax-grid-container">
          <div className="parallax-grid">
            <div className="parallax-column column-down">
              {col1Images.map((img, i) => (
                <div key={`col1-${i}`} className="parallax-item">
                  <img src={img} alt="Maromba" />
                </div>
              ))}
            </div>
            <div className="parallax-column column-up">
              {col2Images.map((img, i) => (
                <div key={`col2-${i}`} className="parallax-item">
                  <img src={img} alt="Maromba" />
                </div>
              ))}
            </div>
            <div className="parallax-column column-down">
              {col3Images.map((img, i) => (
                <div key={`col3-${i}`} className="parallax-item">
                  <img src={img} alt="Maromba" />
                </div>
              ))}
            </div>
            <div className="parallax-column column-up">
              {col4Images.map((img, i) => (
                <div key={`col4-${i}`} className="parallax-item">
                  <img src={img} alt="Maromba" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
