/**
 * Textos de interfaz en los dos idiomas.
 * El contenido largo (experiencia, proyectos, sobre mi) vive en content.ts.
 */

export const LANGUAGES = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof LANGUAGES;

export const DEFAULT_LANG: Lang = "es";

export const ui = {
  es: {
    "meta.title": "Pablo Ocampos - Desarrollador Full Stack y Analista de Sistemas",
    "meta.description":
      "Desarrollador Full Stack en Paraguay especializado en Python y FastAPI, APIs REST, React y PostgreSQL. Sistemas empresariales tipo ERP, integración de sistemas y automatización de procesos.",

    "nav.label": "Navegación principal",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.stack": "Stack",
    "nav.about": "Sobre mí",
    "nav.contact": "Contactar",

    "header.home": "Ir al inicio",
    "header.theme": "Cambiar tema de color",
    "header.theme.system": "Tema del sistema",
    "header.theme.light": "Tema claro",
    "header.theme.dark": "Tema oscuro",
    "header.theme.systemFull": "Tema del sistema. Pulsa para cambiar a claro",
    "header.theme.lightFull": "Tema claro. Pulsa para cambiar a oscuro",
    "header.theme.darkFull": "Tema oscuro. Pulsa para usar el del sistema",
    "cmd.open": "Buscar",
    "cmd.title": "Paleta de comandos",
    "cmd.placeholder": "Buscar secciones, proyectos o tecnologías…",
    "cmd.groupNav": "Ir a",
    "cmd.groupProjects": "Proyectos",
    "cmd.groupTech": "Filtrar por tecnología",
    "cmd.groupActions": "Acciones",
    "cmd.filterBy": "Proyectos con",
    "cmd.theme": "Cambiar tema",
    "cmd.language": "Cambiar idioma",
    "cmd.empty": "Sin resultados.",
    "cmd.hintMove": "moverse",
    "cmd.hintSelect": "elegir",
    "cmd.hintClose": "cerrar",
    "header.lang": "Ver en inglés",
    "header.lang.tooltip": "English",

    "hero.badge": "Abierto a Oportunidades",
    "hero.greeting": "Hola! Soy Pablo Ocampos",
    "hero.role":
      "Analista de Sistemas · Desarrollador Full Stack · Integración de Sistemas · Automatización de Procesos",
    "hero.p1":
      "Desarrollo soluciones de software para entornos empresariales: SaaS, ERP, APIs REST e integración de sistemas.",
    "hero.p2":
      "Experiencia en automatización de procesos, optimizando operaciones reales de negocio.",
    "hero.p3": "Alto Paraná, Paraguay",
    "hero.ctaProjects": "Ver proyectos",
    "hero.ctaContact": "Hablemos",
    "hero.imageAlt": "Foto de perfil de Pablo Mysskoski Ocampos",
    "hero.social": "Redes sociales y contacto",
    "hero.canvas.alt": "Red de nodos animada con las tecnologías principales",

    "section.experience": "Experiencia",
    "section.projects": "Proyectos",
    "section.stack": "Stack",
    "section.about": "Sobre mí",
    "section.contact": "Contactar",

    "experience.more": "Saber más",
    "experience.logoAlt": "Logo de",
    "experience.showMore": "Ver más logros",
    "experience.showLess": "Ver menos",

    "projects.website": "Website",
    "projects.imageAlt": "Captura de pantalla del proyecto",
    "projects.filterActive": "Mostrando {n} proyectos que usan {tech}",
    "projects.clearFilter": "Ver todos",
    "projects.expand": "Ver detalle",
    "projects.collapse": "Cerrar detalle",
    "projects.noResults": "Ningún proyecto usa esa tecnología.",
    "projects.elbrux": "Proyecto de ELBRUX",
    "projects.elbruxLink": "Ver la experiencia",

    "stack.main": "Stack principal",
    "stack.mainNote": "Lo que uso a diario y donde estoy más fuerte",
    "stack.also": "También trabajo con",
    "stack.alsoNote": "Tecnologías que usé en proyectos reales, respaldadas por trabajo entregado",
    "stack.learning": "Conozco, en aprendizaje",
    "stack.learningNote": "Bases sólidas, todavía sin proyectos propios en producción",
    "stack.ai": "Asistentes de IA",
    "stack.aiNote": "Apoyo en el día a día de desarrollo",
    "stack.tools": "Herramientas",
    "stack.toolsNote": "Entorno de trabajo habitual",
    "stack.visit": "Ir al sitio oficial de",
    "stack.hint": "Pulsa una tecnología con contador para ver en qué proyectos la usé. Las marcadas en gris las uso de forma transversal.",
    "stack.filterLabel": "Ver proyectos con",
    "stack.transversalLabel": "Lo uso en prácticamente todo",
    "stack.project": "proyecto",
    "stack.projects": "proyectos",

    "about.factsLabel": "Datos rápidos",
    "about.howIWork": "Cómo trabajo",

    "contact.available": "Abierto a oportunidades",
    "contact.availableDetail": "Remoto (GMT-3) o presencial en Alto Paraná, Paraguay.",
    "contact.responseTime": "Suelo responder en 24-48 horas.",
    "contact.emailLabel": "Correo · pulsa para copiar",
    "contact.copied": "¡Copiado!",
    "contact.linkedin": "Ver perfil profesional",
    "contact.github": "Ver repositorios públicos",
    "contact.downloadCv": "Descargar CV",
    "contact.formIntro": "O escribime directamente desde acá.",

    "form.name": "Nombre",
    "form.email": "Correo",
    "form.subject": "Asunto",
    "form.message": "Mensaje",
    "form.submit": "Enviar Mensaje",
    "form.honeypot": "No rellenar:",

    "footer.rights": "Algunos derechos reservados",
    "footer.linkedin": "Perfil de LinkedIn",
    "footer.github": "Perfil de GitHub",
    "footer.discord": "Perfil de Discord",
    "footer.email": "Enviar un correo",

    "thanks.title": "Mensaje enviado - Pablo Ocampos",
    "thanks.description":
      "Gracias por contactar con Pablo Ocampos. Te responderé lo antes posible.",
    "thanks.heading": "¡Mensaje enviado con éxito!",
    "thanks.body": "Gracias por contactarme. Te responderé lo antes posible 🚀",
    "thanks.back": "Volver al inicio",

    "404.title": "Página no encontrada - Pablo Ocampos",
    "404.description": "La página que buscas no existe o fue movida.",
    "404.heading": "Esta página no existe",
    "404.body": "Puede que el enlace esté roto o que la página se haya movido.",
    "404.back": "Volver al inicio",
  },

  en: {
    "meta.title": "Pablo Ocampos - Full Stack Developer and Systems Analyst",
    "meta.description":
      "Full Stack Developer based in Paraguay, specialised in Python and FastAPI, REST APIs, React and PostgreSQL. Enterprise ERP-style systems, systems integration and process automation. Open to remote work.",

    "nav.label": "Main navigation",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.stack": "Stack",
    "nav.about": "About me",
    "nav.contact": "Contact",

    "header.home": "Back to top",
    "header.theme": "Change colour theme",
    "header.theme.system": "System theme",
    "header.theme.light": "Light theme",
    "header.theme.dark": "Dark theme",
    "header.theme.systemFull": "System theme. Click to switch to light",
    "header.theme.lightFull": "Light theme. Click to switch to dark",
    "header.theme.darkFull": "Dark theme. Click to use the system one",
    "cmd.open": "Search",
    "cmd.title": "Command palette",
    "cmd.placeholder": "Search sections, projects or technologies…",
    "cmd.groupNav": "Go to",
    "cmd.groupProjects": "Projects",
    "cmd.groupTech": "Filter by technology",
    "cmd.groupActions": "Actions",
    "cmd.filterBy": "Projects using",
    "cmd.theme": "Change theme",
    "cmd.language": "Change language",
    "cmd.empty": "No results.",
    "cmd.hintMove": "move",
    "cmd.hintSelect": "select",
    "cmd.hintClose": "close",
    "header.lang": "Ver en español",
    "header.lang.tooltip": "Español",

    "hero.badge": "Open to Opportunities",
    "hero.greeting": "Hi! I'm Pablo Ocampos",
    "hero.role":
      "Systems Analyst · Full Stack Developer · Systems Integration · Process Automation",
    "hero.p1":
      "I build software for enterprise environments: SaaS, ERP systems, REST APIs and systems integration.",
    "hero.p2":
      "Experienced in process automation, optimising real business operations.",
    "hero.p3": "Alto Paraná, Paraguay",
    "hero.ctaProjects": "See projects",
    "hero.ctaContact": "Let's talk",
    "hero.imageAlt": "Profile picture of Pablo Mysskoski Ocampos",
    "hero.social": "Social links and contact",
    "hero.canvas.alt": "Animated node network showing the main technologies",

    "section.experience": "Experience",
    "section.projects": "Projects",
    "section.stack": "Stack",
    "section.about": "About me",
    "section.contact": "Contact",

    "experience.more": "Learn more",
    "experience.logoAlt": "Logo of",
    "experience.showMore": "See more",
    "experience.showLess": "See less",

    "projects.website": "Website",
    "projects.imageAlt": "Screenshot of the project",
    "projects.filterActive": "Showing {n} projects using {tech}",
    "projects.clearFilter": "Show all",
    "projects.expand": "See details",
    "projects.collapse": "Close details",
    "projects.noResults": "No project uses that technology.",
    "projects.elbrux": "An ELBRUX project",
    "projects.elbruxLink": "See the experience",

    "stack.main": "Core stack",
    "stack.mainNote": "What I use daily and where I'm strongest",
    "stack.also": "Also work with",
    "stack.alsoNote": "Technologies I've used in real projects, backed by delivered work",
    "stack.learning": "Familiar with, still learning",
    "stack.learningNote": "Solid basics, no production projects of my own yet",
    "stack.ai": "AI Assistants",
    "stack.aiNote": "Day-to-day development support",
    "stack.tools": "Tools",
    "stack.toolsNote": "My usual working environment",
    "stack.visit": "Go to the official site of",
    "stack.hint": "Click a technology with a counter to see which projects use it. The ones marked in grey are used across the board.",
    "stack.filterLabel": "See projects using",
    "stack.transversalLabel": "I use it across practically everything",
    "stack.project": "project",
    "stack.projects": "projects",

    "about.factsLabel": "Quick facts",
    "about.howIWork": "How I work",

    "contact.available": "Open to opportunities",
    "contact.availableDetail": "Remote (GMT-3) or on-site in Alto Paraná, Paraguay.",
    "contact.responseTime": "I usually reply within 24-48 hours.",
    "contact.emailLabel": "Email · click to copy",
    "contact.copied": "Copied!",
    "contact.linkedin": "See professional profile",
    "contact.github": "See public repositories",
    "contact.downloadCv": "Download CV",
    "contact.formIntro": "Or write to me straight from here.",

    "form.name": "Name",
    "form.email": "Email",
    "form.subject": "Subject",
    "form.message": "Message",
    "form.submit": "Send Message",
    "form.honeypot": "Do not fill in:",

    "footer.rights": "Some rights reserved",
    "footer.linkedin": "LinkedIn profile",
    "footer.github": "GitHub profile",
    "footer.discord": "Discord profile",
    "footer.email": "Send an email",

    "thanks.title": "Message sent - Pablo Ocampos",
    "thanks.description":
      "Thanks for reaching out to Pablo Ocampos. I'll get back to you as soon as possible.",
    "thanks.heading": "Message sent successfully!",
    "thanks.body": "Thanks for getting in touch. I'll reply as soon as I can 🚀",
    "thanks.back": "Back to home",

    "404.title": "Page not found - Pablo Ocampos",
    "404.description": "The page you are looking for does not exist or was moved.",
    "404.heading": "This page does not exist",
    "404.body": "The link may be broken or the page may have been moved.",
    "404.back": "Back to home",
  },
} as const;

export type UIKey = keyof (typeof ui)["es"];
