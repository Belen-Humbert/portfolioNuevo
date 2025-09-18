import CardCarousel from "../components/CardCarousel";

export default function proyect() {
  return (
    <div className="bg-stone-900 p-1 rounded-md shadow-[0px_5px_15px_rgba(0,0,0,1)]">
      <h1 className="p-2 font-bold text-[#9C667D] text-xl">Proyectos</h1>
      <div className="flex flex-col items-center lg:flex-row lg:flex-wrap lg:ml-8">
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
              "Realizado como pruea técnica para Kodland. El objetivo es encontrar todos los pares de cartas antes de que los enemigos toquen las cartas no emparejadas.",
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
      </div>
    </div>
  );
}
