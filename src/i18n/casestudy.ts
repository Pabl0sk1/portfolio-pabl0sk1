/**
 * Contenido de los casos de estudio.
 * La estructura es la misma para todos, asi que anadir Timon o StockPro es
 * agregar una entrada aqui y una ruta en pages/.
 *
 * No se nombra al cliente: en las capturas ya va difuminado y no hay permiso
 * para publicarlo.
 */
import type { Lang } from "./ui";
import type { TechKey } from "../data/tech";

export interface Decision {
  /** que se decidio */
  titulo: string;
  /** la alternativa evidente que se descarto */
  alternativa: string;
  /** por que, que es lo que de verdad importa */
  porque: string;
}

export interface CaseStudy {
  slug: string;
  titulo: string;
  subtitulo: string;
  metaTitle: string;
  metaDescription: string;

  rol: string;
  periodo: string;
  estado: string;
  tags: TechKey[];

  problemaTitulo: string;
  problema: string[];

  arquitecturaTitulo: string;
  arquitecturaIntro: string;

  decisionesTitulo: string;
  decisionesIntro: string;
  decisiones: Decision[];

  resultadosTitulo: string;
  resultados: string[];

  cierreTitulo: string;
  cierre: string;

  volver: string;
  etiquetaRol: string;
  etiquetaPeriodo: string;
  etiquetaEstado: string;
  etiquetaAlternativa: string;
  etiquetaPorque: string;
}

const faroEs: CaseStudy = {
  slug: "faro",
  titulo: "Faro",
  subtitulo:
    "Sistema de Recursos Humanos multi-tenant para pymes, en producción.",
  metaTitle: "Faro: cómo construí un sistema de RRHH multi-tenant | Pablo Ocampos",
  metaDescription:
    "Caso de estudio de Faro: arquitectura multi-tenant con Row-Level Security en PostgreSQL, backend en Python y FastAPI, liquidación de sueldos automatizada y control de asistencia con reconocimiento facial en el navegador.",

  rol: "Diseño, desarrollo e infraestructura",
  periodo: "2026 · en producción",
  estado: "Empresa industrial de ~80 empleados",
  tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],

  problemaTitulo: "El problema",
  problema: [
    "Una empresa industrial de unos 80 empleados liquidaba sueldos a mano, cada quincena, sobre planillas de cálculo. Cada liquidación implicaba recalcular aportes al IPS, aguinaldo proporcional y horas extra, empleado por empleado. Un error se detectaba cuando alguien reclamaba.",
    "La asistencia se llevaba en papel. No había forma de reconstruir quién entró tarde el mes pasado sin revisar planillas archivadas, lo que dejaba a la empresa sin respaldo ante cualquier discusión laboral.",
    "Los ERP genéricos del mercado no modelaban dos cosas propias de la realidad local: el cálculo del aporte obrero-patronal al IPS con sus reglas, y la convivencia entre el salario declarado y los pagos complementarios en efectivo, que la empresa necesitaba registrar por separado y sin mezclar.",
  ],

  arquitecturaTitulo: "La arquitectura",
  arquitecturaIntro:
    "Una sola instancia sirve a varias empresas. El aislamiento entre ellas no depende del código de la aplicación, sino de la base de datos: es la decisión que condiciona todo lo demás.",

  decisionesTitulo: "Decisiones técnicas",
  decisionesIntro:
    "Estas son las que costaron más pensar. En cada una anoto la alternativa que descarté, porque es lo que explica la elección.",
  decisiones: [
    {
      titulo: "Aislamiento por Row-Level Security, en la base de datos",
      alternativa:
        "Filtrar por empresa_id en cada consulta desde la aplicación.",
      porque:
        "Filtrar en la aplicación funciona hasta que alguien olvida un WHERE. En un sistema con datos salariales, ese olvido no es un bug: es una empresa viendo la nómina de otra. Con Row-Level Security la regla vive en PostgreSQL y se aplica aunque la consulta esté mal escrita. La aplicación se conecta con un rol sin permiso para saltarse la política, así que ni un error mío puede desactivarla.",
    },
    {
      titulo: "Multi-tenant desde el primer día, con un solo cliente",
      alternativa:
        "Una base por cliente, que es más simple cuando solo hay uno.",
      porque:
        "Levantar una instancia por cliente parece más fácil hasta que hay que desplegar una corrección en todas. Diseñarlo multi-tenant obligó a separar el núcleo de la plataforma del módulo de RRHH, y esa separación terminó valiendo sola: Timón, el sistema para talleres, se construyó reutilizando ese núcleo, con la autenticación, los roles y la auditoría ya resueltos.",
    },
    {
      titulo: "Reconocimiento facial en el navegador, no en el servidor",
      alternativa:
        "Enviar la foto al backend y comparar ahí, que es lo habitual.",
      porque:
        "El fichaje ocurre en una tablet en planta. Procesar en el navegador significa que la foto nunca sale del dispositivo: al servidor solo viaja un vector numérico, así que el sistema no almacena imágenes de nadie. Además evita cargar el servidor con visión por computadora y mantiene el fichaje funcionando aunque la conexión esté lenta.",
    },
    {
      titulo: "La tabla de asistencia no admite UPDATE ni DELETE",
      alternativa: "Una tabla normal, con permiso para corregir registros.",
      porque:
        "Si un registro de entrada se puede editar, deja de servir como prueba ante una discusión laboral. Se revocaron esos permisos en la base: las correcciones se hacen agregando un registro que anota el motivo, y el original queda. La historia completa es reconstruible y nadie, ni con acceso de administrador, puede borrar la evidencia sin dejar rastro.",
    },
    {
      titulo: "Dos pistas de liquidación, en tablas separadas",
      alternativa: "Una sola tabla con un campo que marque el tipo de pago.",
      porque:
        "El salario declarado y el complemento en efectivo tienen reglas distintas y consecuencias legales distintas. Mezclarlos en la misma tabla con un flag hace que cualquier consulta que olvide filtrar produzca un número equivocado en un reporte que después alguien firma. Separarlos físicamente hace imposible ese error por descuido.",
    },
  ],

  resultadosTitulo: "Resultados",
  resultados: [
    "En producción desde 2026, con la liquidación quincenal de unos 80 empleados corriendo sobre el sistema.",
    "El cálculo de aportes al IPS, aguinaldo y horas extra dejó de hacerse a mano.",
    "Recibos en PDF con firma digital y código QR de validación pública: cualquiera puede comprobar que un recibo es auténtico sin acceder al sistema.",
    "Despliegue con Docker detrás de Caddy con HTTPS automático, integración continua en GitHub Actions y copias de seguridad diarias con restauración verificada, no solo programada.",
    "El núcleo multi-tenant se reutilizó para levantar un segundo producto en una fracción del tiempo.",
  ],

  cierreTitulo: "Qué me llevo",
  cierre:
    "La parte difícil no fue el código, fue entender el negocio: por qué una quincena se calcula así, qué pasa cuando alguien entra tarde media hora, qué necesita ver un gerente y qué no debería ver. Las decisiones técnicas que mejor envejecieron son las que salieron de esas conversaciones, no de elegir la herramienta de moda.",

  volver: "Volver al portafolio",
  etiquetaRol: "Rol",
  etiquetaPeriodo: "Período",
  etiquetaEstado: "Cliente",
  etiquetaAlternativa: "La alternativa que descarté",
  etiquetaPorque: "Por qué",
};

const faroEn: CaseStudy = {
  slug: "faro",
  titulo: "Faro",
  subtitulo:
    "Multi-tenant HR platform for small and medium businesses, running in production.",
  metaTitle: "Faro: building a multi-tenant HR system | Pablo Ocampos",
  metaDescription:
    "Case study of Faro: multi-tenant architecture with Row-Level Security in PostgreSQL, Python and FastAPI backend, automated payroll and attendance tracking with in-browser face recognition.",

  rol: "Design, development and infrastructure",
  periodo: "2026 · in production",
  estado: "Industrial company, ~80 employees",
  tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],

  problemaTitulo: "The problem",
  problema: [
    "An industrial company of around 80 employees ran payroll by hand, every fortnight, on spreadsheets. Each run meant recalculating social security contributions, pro-rata statutory bonus and overtime, employee by employee. Mistakes surfaced when someone complained.",
    "Attendance was tracked on paper. There was no way to reconstruct who came in late last month without digging through filed sheets, which left the company without evidence in any labour dispute.",
    "Off-the-shelf ERPs did not model two things specific to the local reality: the employer and employee social security calculation with its own rules, and the coexistence of the declared salary with supplementary cash payments, which the company needed recorded separately and never mixed.",
  ],

  arquitecturaTitulo: "The architecture",
  arquitecturaIntro:
    "A single instance serves several companies. Isolation between them does not rely on application code but on the database itself: that is the decision everything else hangs off.",

  decisionesTitulo: "Technical decisions",
  decisionesIntro:
    "These are the ones that took the most thinking. For each I note the alternative I rejected, because that is what explains the choice.",
  decisiones: [
    {
      titulo: "Isolation through Row-Level Security, in the database",
      alternativa: "Filtering by company_id in every query from the application.",
      porque:
        "Filtering in the application works right up until someone forgets a WHERE clause. In a system holding salary data that slip is not a bug: it is one company reading another's payroll. With Row-Level Security the rule lives in PostgreSQL and applies even when the query is written wrong. The app connects with a role that cannot bypass the policy, so not even a mistake of mine can switch it off.",
    },
    {
      titulo: "Multi-tenant from day one, with a single client",
      alternativa: "One database per client, which is simpler when there is only one.",
      porque:
        "Spinning up an instance per client looks easier until a fix has to be deployed to all of them. Designing it multi-tenant forced a split between the platform core and the HR module, and that split paid for itself: Timón, the auto-shop system, was built by reusing that core, with authentication, roles and auditing already solved.",
    },
    {
      titulo: "Face recognition in the browser, not on the server",
      alternativa: "Sending the photo to the backend and matching it there, the usual approach.",
      porque:
        "Check-in happens on a tablet on the shop floor. Processing in the browser means the photo never leaves the device: only a numeric vector travels to the server, so the system stores no images of anyone. It also keeps computer vision off the server and check-in working even on a slow connection.",
    },
    {
      titulo: "The attendance table accepts no UPDATE or DELETE",
      alternativa: "A normal table, with permission to correct records.",
      porque:
        "If a check-in record can be edited, it stops working as evidence in a labour dispute. Those permissions were revoked at the database level: corrections are made by appending a record that states the reason, and the original stays. The full history is reconstructable and nobody, not even with admin access, can erase the evidence without leaving a trace.",
    },
    {
      titulo: "Two payroll tracks, in separate tables",
      alternativa: "A single table with a field marking the payment type.",
      porque:
        "The declared salary and the cash supplement follow different rules and carry different legal consequences. Mixing them in one table behind a flag means any query that forgets to filter produces a wrong number in a report someone later signs. Separating them physically makes that careless mistake impossible.",
    },
  ],

  resultadosTitulo: "Results",
  resultados: [
    "In production since 2026, running fortnightly payroll for around 80 employees.",
    "Social security contributions, statutory bonus and overtime are no longer calculated by hand.",
    "PDF payslips with digital signatures and a public QR validation code: anyone can verify a payslip is genuine without access to the system.",
    "Deployed with Docker behind Caddy with automatic HTTPS, continuous integration on GitHub Actions, and daily backups with verified restores, not just scheduled ones.",
    "The multi-tenant core was reused to launch a second product in a fraction of the time.",
  ],

  cierreTitulo: "What I took from it",
  cierre:
    "The hard part was not the code, it was understanding the business: why a fortnight is calculated the way it is, what happens when someone clocks in half an hour late, what a manager needs to see and what they should not. The technical decisions that aged best came out of those conversations, not out of picking the fashionable tool.",

  volver: "Back to the portfolio",
  etiquetaRol: "Role",
  etiquetaPeriodo: "Period",
  etiquetaEstado: "Client",
  etiquetaAlternativa: "The alternative I rejected",
  etiquetaPorque: "Why",
};

export const caseStudies: Record<Lang, Record<string, CaseStudy>> = {
  es: { faro: faroEs },
  en: { faro: faroEn },
};
