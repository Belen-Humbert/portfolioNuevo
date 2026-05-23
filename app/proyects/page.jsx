import CardCarousel from "../components/CardCarousel";

export default function proyect() {
  return (
    <div className="bg-stone-900 p-1 rounded-md shadow-[0px_5px_15px_rgba(0,0,0,1)]">
      <h1 className="p-2 font-bold text-[#9C667D] text-xl">Proyectos</h1>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:flex-wrap lg:ml-12">

        <CardCarousel
          proyectos={{
            title: "Gim Project",
            description:
              "API REST para gestión de gimnasio. Autenticación con JWT, sistema de roles (Super Admin, Entrenador, Miembro), gestión de usuarios, planes, rutinas y registro de entrenamientos. Stack: Node.js, Express, Prisma y PostgreSQL.",
            images: [
              "/img23.png",
              "/img24.png",
              "/img25.png",
              "/img26.png",
              "/img27.png",
              "/img28.png",
              "/img29.png",
            ],
            link: "https://github.com/Belen-Humbert/Gim-Proyect",
          }}
        />


        <CardCarousel
          proyectos={{
            title: "Soy la Luna - App",
            description:
              "App web progresiva (PWA) de astrología y bienestar. Muestra la fase lunar del día, arcano diario del Tarot Rider-Waite, rituales energéticos y eventos astronómicos. Construida con React, Vite, Tailwind y Supabase.",
            images: [
              "/img13.png",
              "/img14.png",
            ],
            link: "https://github.com/Belen-Humbert/soy-la-luna-app",
            deploy: "https://soy-la-luna-app.vercel.app",
          }}
        />
        <CardCarousel
          proyectos={{
            title: "Sushi Software Studio",
            description:
              "Landing page de Sushi Software Studio — presentación de servicios, proyectos y contacto. Diseño personalizado con identidad visual propia. Tecnologías utilizadas: HTML, CSS y JavaScript.",
            images: [
              "/img33.png",
              "/img32.png",
              "/img31.png",
              "/img30.png",
            ],
            link: "https://github.com/Belen-Humbert/Sushi-Software-Studio",
            deploy: "https://sushisoftwarestudio.com.ar",
            deployLabel: "Link a la landing",
          }}
        />
        <CardCarousel
          proyectos={{
            title: "Servicio Gastronómico Los Molina",
            description:
              "Landing page del Servicio Gastronómico Los Molina. Empresa familiar mendocina especializada en parrilla a leña, asado, empanadas caseras y banquete completo para eventos. Tecnologías utilizadas: HTML, CSS y JavaScript.",
            images: [
              "/img16.png",
              "/img17.png",
              "/img18.png",
              "/img19.png",
              "/img20.png",
              "/img21.png",
              "/img22.png",
            ],
            link: "https://github.com/Belen-Humbert/servicio-gastron-mico-los-molina-",
            deploy: "https://belen-humbert.github.io/servicio-gastron-mico-los-molina-/",
            deployLabel: "Link a la landing",
          }}
        />
        <CardCarousel
          proyectos={{
            title: "Musep App",
            description:
              "Sistema administrativo para el Museo Histórico y Natural de Lavalle, desarrollado con JavaScript, Node.js, Express.js y Tailwind CSS. Permite registrar y gestionar piezas, administrar préstamos y hacer seguimiento de taxidermias realizadas en el museo.",
            images: ["/museo1.webp", "/museo2.webp", "/museo3.webp"],
            link: "https://github.com/Belen-Humbert/Museo-App-Nuevo.git",
          }}
        />

        <CardCarousel
          proyectos={{
            title: "TechStore",
            description:
              "E-commerce funcional desarrollado con Python, Django, SQLite, Tailwind CSS y CSS puro. Con rol de administrador para gestionar productos, usuarios y pedidos.",
            images: [
              "/techStore1.webp",
              "/techStore2.webp",
              "/techStore3.webp",
            ],
            link: "https://github.com/Belen-Humbert/proyectoDjango.git",
          }}
        />

        <CardCarousel
          proyectos={{
            title: "AuditaWeb",
            description:
              "Proyecto desarrollado para el espacio curricular Arquitectura y Diseño de Interfaces utilzando tecnologías como JavaScript, React, Material UI y CSS Modules.",
            images: [
              "/auditaweb3.webp",
              "/auditaweb2.webp",
              "/auditaweb1.webp",
            ],
            link: "https://github.com/Belen-Humbert/proyecto-interfaces.git",
          }}
        />

        <CardCarousel
          proyectos={{
            title: "Veterinaria Pulguitas",
            description:
              "Proyecto realizado para la acreditación del espacio curricular Práctica Profesional II. Realizado con PHP, CSS puro, MySQL y Xampp. Se trabajó con encriptación, login, roles y búsqueda de diferentes ítems además de un CRUD para administrar la base de datos de mascotas.",
            images: [
              "/img2.png",
              "/img5.png",
              "/img6.png",
            ],
            link: "https://github.com/Belen-Humbert/Veterinaria-Pulguitas",
          }}
        />

        <CardCarousel
          proyectos={{
            title: "Biblioteca Club Página Web",
            description:
              "Proyecto realizado para Biblioteca Club, una banda de música under de Lavalle, Mendoza. Tecnologías utilizadas: HTML, CSS y Java Script.",
            images: [
              "/img1.png",
              "/img8.png",
            ],
            link: "https://github.com/Belen-Humbert/biblioteca-club",
          }}
        />

        <CardCarousel
          proyectos={{
            title: "Adivina la letra",
            description:
              "Realizado como prueba técnica para Kodland. El objetivo es encontrar todos los pares de cartas antes de que los enemigos toquen las cartas no emparejadas.",
            images: [
              "/img7.png",
            ],
            link: "https://github.com/Belen-Humbert/juego-de-memoria",
          }}
        />

        <CardCarousel
          proyectos={{
            title: "Proyecto de Scraping - MercadoLibre Argentina",
            description:
              "Este proyecto realiza scraping de productos en la categoría smartphones desde MercadoLibre Argentina, guarda los datos y genera distintos archivos CSV con análisis y clasificaciones. Tecnologías utilizadas: Python, Selenium (automatización del navegador), Pandas (procesamiento y análisis de datos) y ChromeDriver.",
            images: [
              "/scrap1.png",
              "/scrapper2.png",
            ],
            link: "https://github.com/Belen-Humbert/Proyecto-de-Scraping",
          }}
        />

        <CardCarousel
          proyectos={{
            title: "Mi Portfolio",
            description:
              "Este portfolio está desarrollado con un stack que combina rendimiento y diseño: utiliza Next.js para asegurar una navegación rápida, Tailwind CSS para un estilo visual limpio y completamente responsive, Embla Carousel para presentar los proyectos de forma dinámica e interactiva, Resend para gestionar de manera confiable el envío de correos de contacto y Vercel como plataforma de despliegue en la nube.",
            images: [
              "/img9.png",
              "/img10.png",
              "/img11.png",
              "/img12.png",
            ],
            link: "https://github.com/Belen-Humbert/portfolioNuevo",
          }}
        />

      </div>
    </div>
  );
}
