import Icono from "./components/Icono";
import CertificateCard from "./components/CertificateComp";

export default function Home() {
  return (
    <div className="">
      <div className="bg-stone-900 p-1 rounded-md shadow-[0px_5px_15px_rgba(0,0,0,1)]">
        <h1 className="text-[#9C667D] text-xl font-bold p-2">Sobre mi</h1>
        <p className="text-white p-2">
          Hola, soy Belén.

Después de más de 10 años de experiencia como Técnica en Alimentos, decidí seguir mi curiosidad y explorar nuevos horizontes en la programación.

Siempre me ha fascinado aprender sobre temas diversos, y encontré en el mundo de las TIC un campo ideal para seguir expandiendo mis conocimientos y habilidades. Hoy me estoy enfocando en desarrollo web, trabajando con JavaScript, React y Node.js, y buscando aportar mi capacidad de análisis y resolución de problemas en proyectos tecnológicos.

Si compartís el mismo interés por la tecnología o simplemente querés conocerme mejor, ¡bienvenido a este espacio! No dudes en ponerte en contacto conmigo.
        </p>
      </div>
      <div className="bg-stone-900 p-1 mt-6 rounded-md shadow-[0px_5px_15px_rgba(0,0,0,1)]">
        <h1 className="text-[#9C667D] text-xl font-bold p-2">Tecnologias</h1>
        <div className="flex flex-col items-center ps-8 p-2 lg:flex-col lg:items-center ">
          <h3 className="text-[#9C667D] text-lg font-semibold">
            Lenguajes de programacion
          </h3>
          <div className="flex flex-row flex-wrap">
            <Icono
              size={50}
              info={{
                dir: "/javascript.svg",
                nom: "Javascript",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/java.svg",
                nom: "Java",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/python.svg",
                nom: "Python",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/html5.svg",
                nom: "Html5",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/css_old.svg",
                nom: "Css",
              }}
            ></Icono>
          </div>
          <h3 className="mt-6 text-[#9C667D] text-lg font-semibold">
            Frameworks y Librerías
          </h3>
          <div className="flex flex-row flex-wrap">
            <Icono
              size={50}
              info={{
                dir: "/Express.js_dark.svg",
                nom: "Express",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/django.svg",
                nom: "Django",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/nodejs.svg",
                nom: "Node",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/React_dark.svg",
                nom: "React",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/tailwindcss.svg",
                nom: "Tailwind",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/bootstrap.svg",
                nom: "Bootstrap",
              }}
            ></Icono>
          </div>
          <h3 className="mt-6 text-[#9C667D] text-lg font-semibold">
            Base de datos
          </h3>
          <div className="flex flex-row flex-wrap">
            <Icono
              size={50}
              info={{
                dir: "/mysql.svg",
                nom: "MySql",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/sql-server.svg",
                nom: "SqlServer",
              }}
            ></Icono>
          </div>
          <h3 className="mt-6 text-[#9C667D] text-lg font-semibold">
            Control de Versiones
          </h3>
          <div className="flex flex-row flex-wrap">
            <Icono
              size={50}
              info={{
                dir: "/git.svg",
                nom: "Git",
              }}
            ></Icono>
            <Icono
              size={50}
              info={{
                dir: "/github-dark.svg",
                nom: "GitHub",
              }}
            ></Icono>
          </div>
        </div>
      </div>

      <div className="bg-stone-900 p-1 mt-6 rounded-md shadow-[0px_5px_15px_rgba(0,0,0,1)]">
  <h1 className="text-[#9C667D] text-xl font-bold p-2">Cursos y Certificaciones</h1>
  <div className="grid grid-cols-1 gap-8 p-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-start">
    
    {/* Primeras dos certificaciones que se mantienen */}
    <CertificateCard
      title="Técnico Superior en Desarrollo de Software (Instituto de Educación Superior N° 9-024 Lavalle)"
      description="Egresé como Técnica Superior en Desarrollo de Software, adquiriendo conocimientos en programación, desarrollo de aplicaciones y buenas prácticas. Aprendí a diseñar, implementar y mantener soluciones tecnológicas, trabajando con distintas herramientas y lenguajes, sentando una base sólida para mi crecimiento profesional."
      url="https://drive.google.com/file/d/1NCuawGYiuB2l9aKrVYEmRqCx0wj9eN3k/view?usp=sharing"
    />
    <CertificateCard
      title="Técnico Superior en Enología e Industria Frutihortícola (Instituto de Educación Superior N° 9-024 Lavalle)"
      description="Egresé como Técnica Superior en Enología e Industria Frutihortícola, adquiriendo conocimientos en procesos de producción, control de calidad y manejo de productos frutihortícolas. Aprendí a optimizar técnicas de elaboración y conservación, desarrollando habilidades prácticas y teóricas para trabajar en la industria alimentaria."
      url="https://drive.google.com/file/d/1pgoIpfzyKJS5ztY39Kwu4lu9G6x5ZqK_/view?usp=sharing"
    />

    {/* Certificaciones de programación y tecnología */}
    <CertificateCard
      title="Fundamentos de Python 1 (CISCO Networking Academy)"
      description="Aprendí los conceptos esenciales de programación en Python, incluyendo variables, tipos de datos, estructuras de control y funciones. Durante el curso, practiqué la resolución de problemas y desarrollé habilidades para escribir programas claros y eficientes, sentando una base sólida para realizar proyectos más complejos en el área de software."
      url="https://drive.google.com/file/d/1HwNpzBIZi22ki6A--9rRSb6mVPyJRvA2/view?usp=sharing"
    />
    <CertificateCard
      title="API REST con PHP y MySQL (Udemy)"
      description="Aprendí a desarrollar APIs REST utilizando PHP y MySQL, creando servicios que permiten la comunicación entre aplicaciones y bases de datos. Practiqué el diseño de endpoints, manejo de datos y buenas prácticas de programación para construir aplicaciones web eficientes y escalables."
      url="https://drive.google.com/file/d/1Fd4kb8f6_dfmQY4dUIrTTKsF80moiFcD/view?usp=sharing"
    />
    <CertificateCard
      title="Testing QA (IT School)"
      description="Aprendí los fundamentos del aseguramiento de la calidad de software, incluyendo técnicas de testing manual y automatizado, diseño de casos de prueba y detección de errores. Desarrollé habilidades para garantizar el funcionamiento correcto de aplicaciones y mejorar la eficiencia y confiabilidad de los sistemas."
      url="https://drive.google.com/file/d/1zW0fGIGh0wvrgxLLs2N1bKIitthREHLM/view?usp=sharing"
    />
    <CertificateCard
      title="Fundamentos profesionales del análisis de datos (Microsoft – LinkedIn Learning)"
      description="Aprendí los conceptos clave del análisis de datos, incluyendo el rol del analista, el ciclo de vida del análisis y la interpretación de métricas y KPIs. Exploré herramientas básicas de visualización y gestión de datos, sentando las bases para trabajar con tecnologías como Excel, SQL y Power BI."
      url=""
    />
    <CertificateCard
      title="Fundamentos profesionales en ciberseguridad (Microsoft – LinkedIn Learning)"
      description="Conocí los principios fundamentales de la ciberseguridad, las amenazas y vulnerabilidades más comunes, y buenas prácticas para proteger datos, redes y sistemas. También comprendí la importancia de políticas de seguridad y cumplimiento normativo en organizaciones de distintos sectores."
      url="https://drive.google.com/file/d/1E_J1xMOwin88N9WKpznblrbQh05zwO2F/view?usp=sharing"
    />
    <CertificateCard
      title="Inteligencia Artificial y Productividad (Google – Santander Open Academy)"
      description="Aprendí cómo la inteligencia artificial puede aplicarse para optimizar la productividad personal y profesional. Exploré herramientas de IA para automatizar tareas, generar ideas y mejorar la toma de decisiones, entendiendo su impacto en distintos sectores y el futuro del trabajo."
      url="https://drive.google.com/file/d/1mJR-Y9Zj-Ok8hKs9qkKTfvfKH5m68F1U/view?usp=sharing"
    />
    <CertificateCard
      title="Transformación Digital (Santander Open Academy - MIT Professional Education)"
      description="Aprendí cómo la transformación digital impacta en organizaciones y procesos. Exploré estrategias para implementar cambios tecnológicos, optimizar la productividad y aprovechar herramientas digitales y la importancia de adaptarse en entornos profesionales actuales."
      url="https://drive.google.com/file/d/1hzAO6v2zvRSgz0Yp5M4jL_HDDZyjqECA/view?usp=sharing"
    />

    {/* Certificaciones de habilidades blandas */}
    <CertificateCard
      title="Comunicación Efectiva (Santander Open Academy)"
      description="Aprendí técnicas clave para mejorar la comunicación interpersonal y profesional, incluyendo escucha activa, claridad en el mensaje y adaptación al público. Exploré estrategias para transmitir ideas, resolver conflictos y colaborar en equipo, fortaleciendo habilidades fundamentales para el trabajo en entornos profesionales."
      url="https://drive.google.com/file/d/1BEssn5IfvnCArKRpdkh99JBp-hI84wh7/view?usp=sharing"
    />
    <CertificateCard
      title="Pensamiento Crítico y Resolución de Problemas (Santander Open Academy)"
      description="Aprendí a analizar situaciones de manera objetiva, identificar problemas y evaluar posibles soluciones. Desarrollé habilidades para tomar decisiones informadas, aplicar razonamiento lógico y creativo, y enfrentar desafíos de forma estratégica en entornos profesionales."
      url="https://drive.google.com/file/d/10INdmF1AB23uA8GRZnGEX-zrf90HFD4X/view?usp=sharing"
    />
    <CertificateCard
      title="Gestión de Proyectos y Fundamentos de Metodología Agile (Santander Open Academy)"
      description="Aprendí los conceptos clave de la gestión de proyectos y la metodología Agile, incluyendo planificación, seguimiento de tareas y colaboración en equipo. Desarrollé habilidades para organizar proyectos, optimizar procesos y adaptarme a cambios de forma eficiente en entornos profesionales."
      url="https://drive.google.com/file/d/1stUnZnu1MhJJ7Ns25JZSCYD6yBT4L8Mz/view?usp=sharing"
    />
    <CertificateCard
      title="Negociación (Santander Open Academy y ESADE)"
      description="Aprendí técnicas y estrategias de negociación efectiva, enfocándome en comunicación, análisis de intereses y resolución de conflictos. Desarrollé habilidades para alcanzar acuerdos satisfactorios, influir positivamente y colaborar de manera constructiva en entornos profesionales y de negocios."
      url="https://drive.google.com/file/d/1SOX2EI7qNX8A2d2z0Gm4kwEWmqekVw2c/view?usp=sharing"
    />
    <CertificateCard
      title="Pensamiento Estratégico y Mentalidad Estratégica (Santander Open Academy)"
      description="Aprendí a analizar situaciones y tomar decisiones con visión a largo plazo, identificando oportunidades y riesgos. Desarrollé habilidades para planificar objetivos, resolver problemas complejos y aplicar estrategias efectivas en entornos profesionales y proyectos."
      url="https://drive.google.com/file/d/1BMdjzl6A55s0vppLWQ5D1Vs-4zcYjI9E/view?usp=sharing"
    />
        </div>
      </div>
    </div>
  );
}
