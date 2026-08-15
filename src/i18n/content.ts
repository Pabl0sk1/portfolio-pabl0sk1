/** Contenido largo del portfolio en los dos idiomas. */
import type { Lang } from "./ui";

export interface ExperienceEntry {
  date: string;
  title: string;
  company: string;
  location: string;
  description: string[];
}

export interface ProjectEntry {
  title: string;
  /** una linea para la pieza del mosaico; la descripcion larga va en el panel */
  resumen: string;
  description: string;
}

/** Se mantienen fuera del diccionario los datos que no se traducen (logo, link, tags). */
export const experience: Record<Lang, ExperienceEntry[]> = {
  es: [
    {
      date: "Junio 2026 - Actualidad",
      title: "Cofundador y Desarrollador Full Stack",
      company: "ELBRUX",
      location: "Alto Paraná, Paraguay",
      description: [
        "Cofundé ELBRUX junto a un socio: un emprendimiento de desarrollo de software a medida para pymes, donde ambos programamos y llevamos el negocio de punta a punta, desde la búsqueda de clientes y el presupuesto hasta el contrato, la entrega y el soporte.",
        "Desarrollamos Faro, sistema web de Recursos Humanos multi-tenant en producción para una empresa industrial de 80 empleados, con backend en Python y FastAPI sobre PostgreSQL, aislamiento de datos por empresa con Row-Level Security, MFA y control de acceso por roles.",
        "Construimos Timón, sistema de gestión para talleres mecánicos, reutilizando el núcleo multi-tenant de Faro como plantilla de producto para acortar el tiempo de desarrollo de la siguiente vertical.",
        "Entregamos StockPro, aplicación de escritorio de gestión comercial en Python y SQLite, instalada y en uso en un cliente, con actualización remota y migraciones de esquema versionadas.",
        "Desplegamos la infraestructura con Docker y Docker Compose detrás de Caddy con HTTPS automático, con CI/CD en GitHub Actions y copias de seguridad diarias con restauración verificada.",
        "Organizamos el trabajo con metodologías ágiles, aplicando Scrum y Kanban sobre ClickUp para planificar, repartir y dar seguimiento a las tareas entre ambos.",
      ],
    },
    {
      date: "Mayo 2025 - Junio 2026",
      title: "Analista de Sistemas / Desarrollador Full Stack",
      company: "Biosafras Group",
      location: "Hernandarias, Paraguay",
      description: [
        "Diseñé e implementé desde cero un sistema web interno tipo Mini ERP para la gestión operativa de la empresa, con backend en Java y Spring Boot exponiendo una API REST propia, y frontend en React, JavaScript y Bootstrap.",
        "Integré y di soporte funcional a Versat ERP, analizando procesos administrativos y contables para alinear el sistema interno con la operación real del negocio.",
        "Desarrollé scripts en Python para extracción, respaldo y sincronización de datos, replicando información clave en MySQL (Hostinger) para consumo externo seguro.",
        "Implementé n8n en servidor propio con dominio dedicado y construí flujos de automatización que redujeron tareas manuales y mejoraron la eficiencia operativa.",
        "Construí un módulo de acceso para clientes sobre la web institucional en WordPress, con lógica y vistas en PHP, permitiendo la descarga de facturas integradas desde datos de Versat ERP.",
        "Desarrollé un dashboard avanzado en Power BI sobre facturación, con gráficos dinámicos, mapas interactivos y filtros para la toma de decisiones gerenciales.",
        "Contenericé y desplegué los sistemas con Docker en servidor propio, y brindé soporte técnico y funcional a usuarios de múltiples sucursales, gestionando conectividad, equipos y coordinación con proveedores externos.",
      ],
    },
    {
      date: "Noviembre 2023 - Agosto 2024",
      title: "Desarrollador de Software",
      company: "Coop. Ayacapé",
      location: "Ciudad del Este, Paraguay",
      description: [
        "Desarrollé aplicaciones de escritorio con GeneXus v9 y v16 usando Java como backend, participando en sistemas críticos para la operación financiera de la cooperativa.",
        "Gestioné y modelé bases de datos en Oracle SQL, implementando nuevos módulos que mejoraron la eficiencia operativa en aproximadamente un 20%.",
        "Construí un módulo de control de entidades físicas y jurídicas sancionadas orientado al cumplimiento normativo, integrado con las listas oficiales de la OFAC y la ONU.",
        "Automaticé la descarga de archivos XML desde fuentes oficiales, con procesamiento, normalización y persistencia de los datos en Oracle SQL.",
        "Validé integraciones y servicios mediante pruebas con Postman, asegurando la consistencia de los datos entre sistemas.",
      ],
    },
  ],

  en: [
    {
      date: "June 2026 - Present",
      title: "Co-founder and Full Stack Developer",
      company: "ELBRUX",
      location: "Hernandarias, Paraguay",
      description: [
        "Co-founded ELBRUX with a business partner: a custom software venture for small and medium businesses, where we both write code and run the business end to end, from finding clients and quoting through to contracts, delivery and support.",
        "Built Faro, a multi-tenant HR web platform running in production for an industrial company of 80 employees, with a Python and FastAPI backend on PostgreSQL, per-tenant data isolation using Row-Level Security, MFA and role-based access control.",
        "Built Timon, a management system for car repair shops, reusing Faro's multi-tenant core as a product template to shorten the build time of the next vertical.",
        "Delivered StockPro, a Python and SQLite desktop application for commercial management, installed and in daily use at a client, with remote updates and versioned schema migrations.",
        "Deployed the infrastructure with Docker and Docker Compose behind Caddy with automatic HTTPS, with CI/CD on GitHub Actions and daily backups with verified restores.",
        "Organised the work with agile methodologies, applying Scrum and Kanban on ClickUp to plan, split and track tasks between the two of us.",
      ],
    },
    {
      date: "May 2025 - June 2026",
      title: "Systems Analyst / Full Stack Developer",
      company: "Biosafras Group",
      location: "Hernandarias, Paraguay",
      description: [
        "Designed and built from scratch an internal Mini ERP web system for the company's day-to-day operations, with a Java and Spring Boot backend exposing its own REST API, and a React, JavaScript and Bootstrap frontend.",
        "Integrated and supported Versat ERP, analysing administrative and accounting processes to align the internal system with how the business actually operates.",
        "Wrote Python scripts for data extraction, backup and synchronisation, replicating key information into MySQL (Hostinger) for secure external consumption.",
        "Deployed n8n on a self-managed server with a dedicated domain and built automation flows that cut manual work and improved operational efficiency.",
        "Built a client portal on top of the company's WordPress site, with logic and views in PHP, letting customers download invoices generated from Versat ERP data.",
        "Developed an advanced Power BI billing dashboard with dynamic charts, interactive maps and filters to support management decisions.",
        "Containerised and deployed the systems with Docker on a self-managed server, and provided technical and functional support to users across multiple branches, handling connectivity, hardware and vendor coordination.",
      ],
    },
    {
      date: "November 2023 - August 2024",
      title: "Software Developer",
      company: "Ayacapé Credit Union",
      location: "Ciudad del Este, Paraguay",
      description: [
        "Built desktop applications with GeneXus v9 and v16 using Java on the backend, working on systems critical to the credit union's financial operations.",
        "Modelled and managed Oracle SQL databases, shipping new modules that improved operational efficiency by roughly 20%.",
        "Developed a compliance module to screen individuals and companies against sanctions lists, integrated with the official OFAC and UN registries.",
        "Automated the download of XML files from official sources, including processing, normalisation and persistence into Oracle SQL.",
        "Validated integrations and services through Postman testing, ensuring data consistency across systems.",
      ],
    },
  ],
};

export const projects: Record<Lang, ProjectEntry[]> = {
  es: [
    {
      title: "Faro · RRHH",
      resumen: "Nóminas, asistencia y recibos firmados con QR",
      description:
        "Sistema de Recursos Humanos web multi-tenant para pymes, en producción con una empresa de ~80 empleados. Liquidaciones quincenales con aporte IPS y aguinaldo, control de asistencia mediante kiosko con reconocimiento facial, recibos en PDF firmados con QR de validación pública y aislamiento de datos por empresa con Row-Level Security en PostgreSQL.",
    },
    {
      title: "Timón · Taller",
      resumen: "Gestión para talleres mecánicos",
      description:
        "Sistema de gestión para talleres mecánicos: órdenes de trabajo con flujo de ocho estados e historial, inventario de repuestos con descuento automático de stock, caja diaria y seguimiento público por QR para que el cliente del taller consulte su vehículo sin necesidad de cuenta. Construido sobre el núcleo multi-tenant reutilizable de Faro.",
    },
    {
      title: "StockPro",
      resumen: "Punto de venta de escritorio, sin conexión",
      description:
        "Aplicación de escritorio para gestión comercial de pymes, entregada e instalada a un cliente real. Punto de venta con ticket imprimible, kardex de productos, cuentas corrientes, arqueo de caja y reportes de rentabilidad. Funciona totalmente offline sobre SQLite y sin dependencias externas: los códigos de barras Code 128 y los gráficos están implementados a mano sobre la librería estándar.",
    },
    {
      title: "BioTech",
      resumen: "ERP modular agroindustrial",
      description:
        "Sistema ERP modular para entorno agroindustrial, enfocado en la gestión de operaciones internas como planificación, horas extras, solicitudes de crédito y control de entidades. Integra datos de sistemas externos, ofrece análisis mediante dashboards y está desplegado íntegramente en contenedores Docker.",
    },
    {
      title: "Atelier",
      resumen: "Ventas, inventario y alquiler de prendas",
      description:
        "Sistema de gestión para una ropería, que centraliza ventas, compras, inventario y alquiler de prendas, permitiendo un mejor control operativo y organización de los procesos internos.",
    },
    {
      title: "Shop Easy",
      resumen: "Listas de compras en tiempo real",
      description:
        "Aplicación móvil para la gestión de listas de compras con sincronización en tiempo real, pensada para mejorar la organización y experiencia del usuario.",
    },
  ],

  en: [
    {
      title: "Faro · HR",
      resumen: "Payroll, attendance and QR-signed payslips",
      description:
        "Multi-tenant HR web platform for small and medium businesses, running in production for a company of ~80 employees. Fortnightly payroll with social security contributions and statutory bonus, attendance tracking through a face-recognition kiosk, digitally signed PDF payslips with a public QR validation code, and per-company data isolation using Row-Level Security in PostgreSQL.",
    },
    {
      title: "Timón · Auto Shop",
      resumen: "Management system for car repair shops",
      description:
        "Management system for car repair shops: work orders with an eight-stage pipeline and full history, spare-part inventory with automatic stock deduction, daily cash register, and public QR tracking so customers can check their vehicle without an account. Built on top of Faro's reusable multi-tenant core.",
    },
    {
      title: "StockPro",
      resumen: "Offline desktop point of sale",
      description:
        "Desktop application for small-business commercial management, delivered and installed for a real client. Point of sale with printable receipts, product ledger, customer accounts, cash reconciliation and profitability reports. Runs fully offline on SQLite with zero external dependencies: the Code 128 barcodes and the charts are hand-implemented on the standard library.",
    },
    {
      title: "BioTech",
      resumen: "Modular agro-industrial ERP",
      description:
        "Modular ERP system for an agro-industrial company, focused on internal operations such as planning, overtime, credit requests and entity management. It pulls data from external systems, provides dashboards for decision-making and is deployed entirely in Docker containers.",
    },
    {
      title: "Atelier",
      resumen: "Sales, inventory and garment rentals",
      description:
        "Management system for a clothing shop that centralises sales, purchases, inventory and garment rentals, giving better operational control and organisation of internal processes.",
    },
    {
      title: "Shop Easy",
      resumen: "Real-time shopping lists",
      description:
        "Mobile app for managing shopping lists with real-time synchronisation, designed to improve organisation and the overall user experience.",
    },
  ],
};

export const aboutMe: Record<Lang, string[]> = {
  es: [
    "Soy Pablo Ocampos, desarrollador de software y analista de sistemas en formación. Construyo <strong>sistemas de gestión para empresas</strong>: la clase de software que un equipo usa todos los días para trabajar, con <strong>Python y FastAPI</strong> en el backend y <strong>React, PostgreSQL y Docker</strong> en el resto.",
  ],
  en: [
    "I'm Pablo Ocampos, a software developer and systems analyst in training. I build <strong>business management systems</strong>: the kind of software a team relies on every day, with <strong>Python and FastAPI</strong> on the backend and <strong>React, PostgreSQL and Docker</strong> across the rest.",
  ],
};

export interface Dato {
  etiqueta: string;
  valor: string;
}

/** Lo que un reclutador filtra de entrada y antes no estaba en el sitio */
export const datosRapidos: Record<Lang, Dato[]> = {
  es: [
    { etiqueta: "Ubicación", valor: "Hernandarias, Alto Paraná, Paraguay" },
    { etiqueta: "Experiencia", valor: "3 años en desarrollo full stack" },
    { etiqueta: "Disponibilidad", valor: "Remoto (GMT-3) o presencial en Alto Paraná" },
    { etiqueta: "Idiomas", valor: "Español nativo · Portugués fluido · Inglés intermedio" },
    { etiqueta: "Formación", valor: "Lic. en Análisis de Sistemas, UNE (9.º semestre)" },
    { etiqueta: "Ahora", valor: "Cofundador de ELBRUX, con software en producción" },
  ],
  en: [
    { etiqueta: "Location", valor: "Hernandarias, Alto Paraná, Paraguay" },
    { etiqueta: "Experience", valor: "3 years in full stack development" },
    { etiqueta: "Availability", valor: "Remote (GMT-3) or on-site in Alto Paraná" },
    { etiqueta: "Languages", valor: "Native Spanish · Fluent Portuguese · Intermediate English" },
    { etiqueta: "Education", valor: "BSc in Systems Analysis, UNE (9th semester)" },
    { etiqueta: "Currently", valor: "Co-founder of ELBRUX, with software in production" },
  ],
};

export interface Principio {
  titulo: string;
  texto: string;
}

/** Como trabaja, sacado de decisiones reales y no de frases hechas */
export const principios: Record<Lang, Principio[]> = {
  es: [
    {
      titulo: "Primero el negocio, después el código",
      texto:
        "Antes de escribir nada intento entender por qué una quincena se calcula así o qué necesita ver un gerente. Las decisiones técnicas que mejor envejecen salen de esas conversaciones.",
    },
    {
      titulo: "De punta a punta",
      texto:
        "Levanto requisitos, escribo el código, despliego y doy soporte. Haberme hecho cargo del final cambia cómo escribo el principio.",
    },
    {
      titulo: "Automatizar lo repetitivo",
      texto:
        "Suele ser donde menos código hace falta para el mayor impacto: procesos manuales que pasan a correr solos y datos dispersos que se vuelven un reporte útil.",
    },
    {
      titulo: "Que no se rompa en silencio",
      texto:
        "Copias de seguridad con restauración probada, no solo programada. Reglas que se aplican en la base y no dependen de que nadie olvide un WHERE.",
    },
  ],
  en: [
    {
      titulo: "Business first, code second",
      texto:
        "Before writing anything I try to understand why a payroll period is calculated the way it is, or what a manager actually needs to see. The technical decisions that age best come out of those conversations.",
    },
    {
      titulo: "End to end",
      texto:
        "I gather the requirements, write the code, deploy it and support it. Owning the end changes how I write the beginning.",
    },
    {
      titulo: "Automate the repetitive",
      texto:
        "That is usually where the least code buys the most impact: manual processes that start running on their own, and scattered data that turns into a report someone can act on.",
    },
    {
      titulo: "Nothing fails silently",
      texto:
        "Backups with verified restores, not just scheduled ones. Rules enforced by the database instead of relying on nobody forgetting a WHERE clause.",
    },
  ],
};

export const aboutMeImageAlt: Record<Lang, string> = {
  es: "Pablo Mysskoski Ocampos, desarrollador full stack",
  en: "Pablo Mysskoski Ocampos, full stack developer",
};
