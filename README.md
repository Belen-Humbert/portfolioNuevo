# 💻 Portfolio — Belén Humbert

Portfolio personal desarrollado con Next.js, donde presento mi experiencia, proyectos y formación como desarrolladora de software.

🔗 **[Ver portfolio en vivo](https://portfolio-nuevo-git-main-belen-humerts-projects.vercel.app)**

---

## ✨ Funcionalidades

- **Sobre mí** — presentación personal y descripción de Sushi Software Studio
- **Tecnologías** — stack organizado por categorías con íconos interactivos
- **Proyectos** — carrusel de imágenes por proyecto con links a repositorio y deploy
- **Cursos y certificaciones** — con links a credenciales
- **Contacto** — formulario funcional con envío de emails via Resend
- **CV descargable** — disponible directamente desde el sidebar

---

## 🛠 Stack

| | |
|---|---|
| Framework | Next.js 15 |
| Estilos | Tailwind CSS |
| Carrusel | Embla Carousel |
| Emails | Resend |
| Deploy | Vercel |

---

## 🚀 Correr localmente

```bash
# Clonar el repositorio
git clone https://github.com/Belen-Humbert/portfolioNuevo.git
cd portfolioNuevo/portfolio

# Instalar dependencias
npm install

# Crear archivo de variables de entorno
cp .env.local.example .env.local
# Completar con tu API key de Resend

# Correr en desarrollo
npm run dev -- --turbo
```

Abrí [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📁 Estructura

```
app/
├── components/       # Componentes reutilizables
├── contacto/         # Página de contacto
├── proyects/         # Página de proyectos
├── api/              # Endpoint para envío de emails
├── layout.jsx        # Layout principal con sidebar
└── page.jsx          # Página principal (Sobre mí)
public/               # Imágenes, íconos SVG y CV
```

---

## 📬 Contacto

- 🌐 [sushisoftwarestudio.com.ar](https://sushisoftwarestudio.com.ar)
- 💼 [LinkedIn](https://www.linkedin.com/in/belén-humbert/)
- 🐙 [GitHub](https://github.com/Belen-Humbert)
