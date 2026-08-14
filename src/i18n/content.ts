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
  description: string;
}

/** Se mantienen fuera del diccionario los datos que no se traducen (logo, link, tags). */
export const experience: Record<Lang, ExperienceEntry[]> = {
  es: [
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
        "Brindé soporte técnico y funcional a usuarios de múltiples sucursales, gestionando conectividad, equipos y coordinación con proveedores externos.",
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
        "Provided technical and functional support to users across multiple branches, handling connectivity, hardware and coordination with external vendors.",
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
      description:
        "Sistema de Recursos Humanos web multi-tenant para pymes, en producción con una empresa de ~80 empleados. Liquidaciones quincenales con aporte IPS y aguinaldo, control de asistencia mediante kiosko con reconocimiento facial, recibos en PDF firmados con QR de validación pública y aislamiento de datos por empresa con Row-Level Security en PostgreSQL.",
    },
    {
      title: "Timón · Taller",
      description:
        "Sistema de gestión para talleres mecánicos: órdenes de trabajo con flujo de ocho estados e historial, inventario de repuestos con descuento automático de stock, caja diaria y seguimiento público por QR para que el cliente del taller consulte su vehículo sin necesidad de cuenta. Construido sobre el núcleo multi-tenant reutilizable de Faro.",
    },
    {
      title: "StockPro",
      description:
        "Aplicación de escritorio para gestión comercial de pymes, entregada e instalada a un cliente real. Punto de venta con ticket imprimible, kardex de productos, cuentas corrientes, arqueo de caja y reportes de rentabilidad. Funciona totalmente offline sobre SQLite y sin dependencias externas: los códigos de barras Code 128 y los gráficos están implementados a mano sobre la librería estándar.",
    },
    {
      title: "BioTech",
      description:
        "Sistema ERP modular para entorno agroindustrial, enfocado en la gestión de operaciones internas como planificación, horas extras, solicitudes de crédito y control de entidades. Integra datos de sistemas externos y ofrece análisis mediante dashboards para soporte en la toma de decisiones.",
    },
    {
      title: "Atelier",
      description:
        "Sistema de gestión para negocio local que centraliza ventas, compras, inventario y alquileres, permitiendo un mejor control operativo y organización de procesos internos.",
    },
    {
      title: "Shop Easy",
      description:
        "Aplicación móvil para la gestión de listas de compras con sincronización en tiempo real, pensada para mejorar la organización y experiencia del usuario.",
    },
  ],

  en: [
    {
      title: "Faro · HR",
      description:
        "Multi-tenant HR web platform for small and medium businesses, running in production for a company of ~80 employees. Fortnightly payroll with social security contributions and statutory bonus, attendance tracking through a face-recognition kiosk, digitally signed PDF payslips with a public QR validation code, and per-company data isolation using Row-Level Security in PostgreSQL.",
    },
    {
      title: "Timón · Auto Shop",
      description:
        "Management system for car repair shops: work orders with an eight-stage pipeline and full history, spare-part inventory with automatic stock deduction, daily cash register, and public QR tracking so customers can check their vehicle without an account. Built on top of Faro's reusable multi-tenant core.",
    },
    {
      title: "StockPro",
      description:
        "Desktop application for small-business commercial management, delivered and installed for a real client. Point of sale with printable receipts, product ledger, customer accounts, cash reconciliation and profitability reports. Runs fully offline on SQLite with zero external dependencies: the Code 128 barcodes and the charts are hand-implemented on the standard library.",
    },
    {
      title: "BioTech",
      description:
        "Modular ERP system for an agro-industrial company, focused on internal operations such as planning, overtime, credit requests and entity management. It pulls data from external systems and provides dashboards to support decision-making.",
    },
    {
      title: "Atelier",
      description:
        "Management system for a local business that centralises sales, purchases, inventory and rentals, giving better operational control and organisation of internal processes.",
    },
    {
      title: "Shop Easy",
      description:
        "Mobile app for managing shopping lists with real-time synchronisation, designed to improve organisation and the overall user experience.",
    },
  ],
};

export const aboutMe: Record<Lang, string[]> = {
  es: [
    "Soy Pablo Ocampos, desarrollador de software y analista de sistemas en formación. Me dedico a construir <strong>sistemas de gestión para empresas</strong>: la clase de software que un equipo usa todos los días para trabajar.",
    "Mi stack principal es <strong>Python con FastAPI</strong> en el backend y <strong>React, PostgreSQL y Docker</strong> en el resto. Con eso diseño APIs REST, modelo bases de datos y despliego lo que construyo.",
    "Trabajo los proyectos <strong>de punta a punta</strong>: entiendo primero el proceso de negocio, después escribo el código, y me hago cargo del despliegue y del soporte. Me interesa tanto que el sistema funcione como que la persona que lo usa no tenga que pelearse con él.",
    "Disfruto especialmente de <strong>automatizar lo repetitivo</strong> y de convertir datos dispersos en reportes que sirvan para decidir. Suele ser donde menos código hace falta para el mayor impacto.",
    "Actualmente estoy <strong>abierto a nuevas oportunidades</strong>, en modalidad remota o presencial, y cursando el 9.º semestre de la Licenciatura en Análisis de Sistemas en la Universidad Nacional del Este.",
  ],

  en: [
    "I'm Pablo Ocampos, a software developer and systems analyst in training. I build <strong>business management systems</strong>: the kind of software a team relies on every day to get their work done.",
    "My core stack is <strong>Python with FastAPI</strong> on the backend and <strong>React, PostgreSQL and Docker</strong> across the rest. That's what I use to design REST APIs, model databases and ship what I build.",
    "I take projects <strong>end to end</strong>: I start by understanding the business process, then write the code, and I own the deployment and the support that follows. I care as much about the system working as about the person using it not having to fight with it.",
    "I particularly enjoy <strong>automating the repetitive</strong> and turning scattered data into reports people can actually decide on. That's usually where the least code buys the most impact.",
    "I'm currently <strong>open to new opportunities</strong>, remote or on-site, and in my 9th semester of a Systems Analysis degree at Universidad Nacional del Este.",
  ],
};

export const aboutMeImageAlt: Record<Lang, string> = {
  es: "Pablo Mysskoski Ocampos, desarrollador full stack",
  en: "Pablo Mysskoski Ocampos, full stack developer",
};
