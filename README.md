# :clinking_glasses: Mansão Maromba 

<div align="center">

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/97392840-9f1d-4c98-ad1d-a0fa1e289437" />

**Uma plataforma web editorial, imersiva e de alta performance criada para a linha de bebidas premium da Mansão Maromba.**

[![React](https://img.shields.io/badge/react-%3E%3D18.0.0-61dafb.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/vite-%3E%3D4.0.0-646CFF.svg)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/gsap-%3E%3D3.12.0-88CE02.svg)](https://gsap.com/)

</div>

---

## 📋 Sobre

A landing page da **Mansão Maromba** é uma experiência web premium desenvolvida para destacar a exclusiva linha de Whiskys, Gins e Vodkas da marca. Focada 100% no impacto visual, a aplicação utiliza animações complexas, grids multi-camadas de parallax e um design focado no dark theme que reflete atitude, beleza e o lifestyle luxuoso do negócio.

### 🎯 Ideal Para
- Lançamento de coleções exclusivas de bebidas
- Fortalecimento de marca no segmento premium
- E-commerces B2C com foco editorial ("Magazine Layout")

---

## ✨ Funcionalidades

### 💻 Frontend & Experiência do Usuário (UX)
- ✅ **Parallax Grid Motion** - Interação fluída com rolagem multi-camada (grids que sobem e descem inversamente) construída com `GSAP ScrollTrigger`.
- ✅ **Carrossel Infinito Seamless** - Slider de produtos auto-play contínuo, simulando um loop ilusório de ponta-a-ponta, clonagem de dom invisível e controle dinâmico.
- ✅ **Animações Editoriais de Scroll** - Textos, títulos gigantes e layouts revelados suavemente pelo movimento da página.
- ✅ **Mobile Menu (Off-Canvas)** - Menu "hamburger" otimizado c/ blur (Glassmorphism), escondido à direita que desliza de forma macia para celulares e tablets.
- ✅ **Single Page Application (SPA)** - Transições baseadas em View State, com rolamento nativo da tela e substituição completa de painéis (como as páginas 'Todos os Produtos') sem dependência de Routers pesados.
- ✅ **Design Responsivo Avançado** - Escalonamentos minuciosos focados não apenas em celulares (480px) mas em proporções ultra-longas como as do **iPad Pro (1024x1366)** garantindo imagens fixas formosas.

---

## 🛠️ Tech Stack

### Lógica & Apresentação
- **UI Framework:** React
- **Build Tool:** Vite
- **Styling:** Vanilla CSS3 + Flexbox/Grid estrutural e tipografias dinâmicas (`clamp()`).
- **Animações de UI:** GSAP (GreenSock Animation Platform) + ScrollTrigger plugin
- **Estado Global:** React Hooks (useState, useEffect, useLayoutEffect, useRef)
- **Navegação Dinâmica:** Controle direto de fluxo pela árvore de propriedades do `App.jsx`.

---

## 📁 Estrutura do Projeto

```
SaborEnergetico/front-end/
├── src/
│   ├── assets/             # Imagens tratadas, recortes, logo e banco de dados mock (bebidasList)
│   ├── components/         # Blocos de interface reutilizáveis 
│   │   ├── About/          # Grid editorial de lifestyle Mansão c/ GSAP Parallax
│   │   ├── AllProducts/    # Catálogo SPA revelando a linha completa
│   │   ├── CustomCursor/   # Cursor de hardware customizado
│   │   ├── Hero/           # Banner imersivo c/ fundo dinâmico e tipografia esticada
│   │   ├── Navbar/         # Navegação Fixa + Blur c/ Hamburger Menu off-canvas
│   │   ├── ProductGrid/    # Apresentador por prateleiras + Slider Carrossel loop
│   │   └── SmoothScroll/   # Lenis Script envolvente p/ suavidade global
│   │
│   ├── App.jsx             # Raiz de UI e roteamento via state
│   ├── App.css             # Design Tokens (Color Palette, Vars Deep Dark)
│   └── main.jsx            # Entrypoint Vite
│
├── package.json            # Dependências NPM
└── README.md               # Este arquivo
```

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+ instalado
- IDE moderna (VS Code)

### 1️⃣ Instalação Local

**Navegue até a pasta front-end:**
```bash
cd front-end
```

**Instale os pacotes principais:**
```bash
npm install
```

**Levante o servidor relâmpago Vite:**
```bash
npm run dev
# Acesse o link que abrirá no console: http://localhost:5173
```

---

## 📊 Performance Visual

- ⚡ **Zero Layout Shifts:** O CSS é desenhado para não trepidar nem carregar o DOM incorretamente antes do GSAP calcular alturas.
- 📱 **Mobile-First Thinking:** Experiência pensada em toque ("Touch & Tap") para celulares, expandindo-se gloriosamente para laptops ultra-wide.
- 🎨 **Paleta Exclusiva:** Contraste estrito de cor preta absoluta `#000`/`#0d0d0d` com destaques textuais dourados requintados (Luxo e Qualidade).

---

## 🤝 Contribuindo

Sinta-se à vontade para ajudar essa Landing Page a virar um Monolito Full-Stack:

1. Faça um Fork do projeto
2. Crie uma branch para sua Feature (`git checkout -b feature/CarrinhoDeCompras`)
3. Efetue os Commits (`git commit -m 'Added Shopping Cart UI'`)
4. Faça o Push (`git push origin feature/CarrinhoDeCompras`)
5. Abra o Pull Request no Github

---

## 📝 Licença

Livre para fins de estudo e visualização. Todos os direitos reservados.

---

<div align="center">

**⭐ Se este showcase visual fez a diferença, considere deixar uma estrela!**

[⬆ Voltar ao topo](#-mansão-maromba---premium-landing-page)

</div>
