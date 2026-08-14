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
    "hero.imageAlt": "Foto de perfil de Pablo Mysskoski Ocampos",
    "hero.social": "Redes sociales y contacto",
    "hero.model.alt": "Modelo 3D de un escritorio de programador",
    "hero.model.loading": "Cargando modelo 3D…",
    "hero.model.error": "No se pudo cargar el modelo 3D.",

    "section.experience": "Experiencia",
    "section.projects": "Proyectos",
    "section.stack": "Stack",
    "section.about": "Sobre mí",
    "section.contact": "Contactar",

    "experience.more": "Saber más",
    "experience.logoAlt": "Logo de",

    "projects.website": "Website",
    "projects.imageAlt": "Captura de pantalla del proyecto",

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

    "form.name": "Nombre",
    "form.email": "Correo",
    "form.subject": "Asunto",
    "form.message": "Mensaje",
    "form.file": "Adjuntar archivo",
    "form.filePlaceholder": "Selecciona un archivo…",
    "form.submit": "Enviar Mensaje",
    "form.honeypot": "No rellenar:",

    "footer.rights": "Algunos derechos reservados",
    "footer.linkedin": "Perfil de LinkedIn",
    "footer.github": "Perfil de GitHub",
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
    "hero.imageAlt": "Profile picture of Pablo Mysskoski Ocampos",
    "hero.social": "Social links and contact",
    "hero.model.alt": "3D model of a developer desk",
    "hero.model.loading": "Loading 3D model…",
    "hero.model.error": "The 3D model could not be loaded.",

    "section.experience": "Experience",
    "section.projects": "Projects",
    "section.stack": "Stack",
    "section.about": "About me",
    "section.contact": "Contact",

    "experience.more": "Learn more",
    "experience.logoAlt": "Logo of",

    "projects.website": "Website",
    "projects.imageAlt": "Screenshot of the project",

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

    "form.name": "Name",
    "form.email": "Email",
    "form.subject": "Subject",
    "form.message": "Message",
    "form.file": "Attach a file",
    "form.filePlaceholder": "Choose a file…",
    "form.submit": "Send Message",
    "form.honeypot": "Do not fill in:",

    "footer.rights": "Some rights reserved",
    "footer.linkedin": "LinkedIn profile",
    "footer.github": "GitHub profile",
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
