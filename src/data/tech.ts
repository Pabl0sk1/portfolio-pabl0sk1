/**
 * Registro unico de tecnologias.
 *
 * Antes Stack y Projects tenian cada uno su propia lista y podian
 * contradecirse. Ahora las dos leen de aqui, y de paso permite cruzar una
 * tecnologia con los proyectos que la usan.
 *
 * `tier` refleja el nivel real declarado, no la preferencia:
 *   main     lo que se usa a diario
 *   also     respaldado por proyectos entregados
 *   learning bases solidas, sin proyectos propios todavia
 *   tool     entorno de trabajo, no cuenta como stack
 *   ai       asistentes
 */

export type Tier = "main" | "also" | "learning" | "tool" | "ai";

export interface Tech {
  label: string;
  link: string;
  tier: Tier;
}

export const TECH = {
  python: { label: "Python", link: "https://www.python.org/", tier: "main" },
  fastapi: { label: "FastAPI", link: "https://fastapi.tiangolo.com/", tier: "main" },
  react: { label: "React", link: "https://react.dev/", tier: "main" },
  tailwind: { label: "Tailwind", link: "https://tailwindcss.com/", tier: "main" },
  node: { label: "Node.js", link: "https://nodejs.org/", tier: "main" },
  postgresql: { label: "PostgreSQL", link: "https://www.postgresql.org/", tier: "main" },
  docker: { label: "Docker", link: "https://www.docker.com/", tier: "main" },
  git: { label: "Git", link: "https://git-scm.com/", tier: "main" },

  java: { label: "Java", link: "https://www.java.com/", tier: "also" },
  springboot: {
    label: "Spring Boot",
    link: "https://spring.io/projects/spring-boot",
    tier: "also",
  },
  php: { label: "PHP", link: "https://www.php.net/", tier: "also" },
  mysql: { label: "MySQL", link: "https://www.mysql.com/", tier: "also" },
  angular: { label: "Angular", link: "https://angular.dev/", tier: "also" },
  bootstrap: { label: "Bootstrap", link: "https://getbootstrap.com/", tier: "also" },
  typescript: {
    label: "TypeScript",
    link: "https://www.typescriptlang.org/",
    tier: "also",
  },
  javascript: {
    label: "JavaScript",
    link: "https://developer.mozilla.org/docs/Web/JavaScript",
    tier: "also",
  },
  html: { label: "HTML", link: "https://developer.mozilla.org/docs/Web/HTML", tier: "also" },
  css: { label: "CSS", link: "https://developer.mozilla.org/docs/Web/CSS", tier: "also" },
  sqlite: { label: "SQLite", link: "https://www.sqlite.org/", tier: "also" },
  firebase: { label: "Firebase", link: "https://firebase.google.com/", tier: "also" },
  ionic: { label: "Ionic", link: "https://ionicframework.com/", tier: "also" },
  sass: { label: "SASS", link: "https://sass-lang.com/", tier: "also" },

  laravel: { label: "Laravel", link: "https://laravel.com/", tier: "learning" },
  next: { label: "Next.js", link: "https://nextjs.org/", tier: "learning" },

  n8n: { label: "n8n", link: "https://n8n.io/", tier: "tool" },
  github: { label: "GitHub", link: "https://github.com/", tier: "tool" },
  netlify: { label: "Netlify", link: "https://www.netlify.com/", tier: "tool" },
  hostinger: { label: "Hostinger", link: "https://www.hostinger.com/", tier: "tool" },
  postman: { label: "Postman", link: "https://www.postman.com/", tier: "tool" },
  vscode: { label: "VS Code", link: "https://code.visualstudio.com/", tier: "tool" },
  eclipse: { label: "Eclipse", link: "https://www.eclipse.org/", tier: "tool" },
  dbeaver: { label: "DBeaver", link: "https://dbeaver.io/", tier: "tool" },
  clickup: { label: "ClickUp", link: "https://clickup.com/", tier: "tool" },
  vite: { label: "Vite", link: "https://vite.dev/", tier: "tool" },
  astro: { label: "Astro", link: "https://astro.build/", tier: "tool" },
  bash: { label: "Bash", link: "https://www.gnu.org/software/bash/", tier: "tool" },
  powershell: { label: "PowerShell", link: "https://aka.ms/powershell", tier: "tool" },

  claude: { label: "Claude", link: "https://claude.ai/", tier: "ai" },
  chatgpt: { label: "ChatGPT", link: "https://chatgpt.com/", tier: "ai" },
  gemini: { label: "Gemini", link: "https://gemini.google.com/", tier: "ai" },
  deepseek: { label: "DeepSeek", link: "https://www.deepseek.com/", tier: "ai" },
} as const satisfies Record<string, Tech>;

export type TechKey = keyof typeof TECH;

/** Orden en que se muestra cada grupo del Stack */
export const TIER_ORDER: Record<Tier, TechKey[]> = {
  main: ["python", "fastapi", "react", "tailwind", "node", "postgresql", "docker", "git"],
  also: [
    "java",
    "springboot",
    "php",
    "mysql",
    "angular",
    "bootstrap",
    "typescript",
    "javascript",
    "html",
    "css",
    "sqlite",
    "firebase",
  ],
  learning: ["laravel", "next"],
  tool: [
    "n8n",
    "github",
    "netlify",
    "hostinger",
    "postman",
    "vscode",
    "eclipse",
    "dbeaver",
    "clickup",
    "vite",
    "astro",
    "bash",
    "powershell",
  ],
  ai: ["claude", "chatgpt", "gemini", "deepseek"],
};

/** Color de la etiqueta cuando la tecnologia aparece en una tarjeta */
export const TAG_COLOR: Partial<Record<TechKey, string>> = {
  html: "text-red-500",
  css: "text-violet-500",
  sass: "text-pink-500",
  bootstrap: "text-violet-500",
  tailwind: "text-sky-500",
  javascript: "text-yellow-500",
  typescript: "text-blue-500",
  react: "text-sky-500",
  angular: "text-red-500",
  python: "text-blue-500",
  fastapi: "text-teal-500",
  java: "text-amber-500",
  springboot: "text-green-500",
  ionic: "text-blue-500",
  firebase: "text-yellow-500",
  postgresql: "text-blue-500",
  mysql: "text-blue-500",
  sqlite: "text-sky-700",
  docker: "text-blue-400",
};
