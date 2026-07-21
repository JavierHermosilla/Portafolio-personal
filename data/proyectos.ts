export interface ProyectoLink {
  label: string;
  href: string;
  type: "platform" | "repository" | "video";
}

export interface Proyecto {
  id: number;
  title: string;
  category: string;
  summary: string;
  details: string[];
  stack: string[];
  featured?: boolean;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  youtubeId?: string;
  links: ProyectoLink[];
}

export const misProyectos: Proyecto[] = [
  {
    id: 1,
    title: "HendaFlux",
    category: "Proyecto principal · SaaS en producción",
    summary:
      "Plataforma SaaS de gestión comercial y punto de venta que centraliza ventas, productos, inventario, compras, caja y suscripciones.",
    details: [
      "HendaFlux centraliza procesos de gestión comercial y punto de venta en una sola plataforma.",
      "El proyecto integra autenticación, persistencia de datos, correo transaccional, pagos y despliegue web con el stack indicado.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Mercado Pago",
      "Resend",
      "Vercel",
    ],
    featured: true,
    image: {
      src: "/hendaflux-logo.png",
      alt: "Logo de HendaFlux, plataforma SaaS de gestión comercial",
      width: 220,
      height: 202,
    },
    links: [
      {
        label: "Ver plataforma",
        href: "https://hendaflux.com",
        type: "platform",
      },
    ],
  },
  {
    id: 2,
    title: "InventPro",
    category: "API REST · Proyecto académico grupal",
    summary:
      "Proyecto académico desarrollado por un equipo de tres integrantes. Estuve a cargo del backend completo para la gestión de inventario y órdenes de compra.",
    details: [
      "Proyecto académico desarrollado por un equipo de tres integrantes. Estuve a cargo del backend completo, mientras los otros dos integrantes desarrollaron el frontend.",
      "Implementé la API REST, autenticación con JWT, validación con Zod, persistencia en PostgreSQL y endpoints probados mediante Postman.",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "Zod",
      "Postman",
    ],
    youtubeId: "fwyQtq0Dnyw",
    links: [
      {
        label: "Ver repositorio",
        href: "https://github.com/JavierHermosilla/inventpro",
        type: "repository",
      },
      {
        label: "Ver video",
        href: "https://www.youtube.com/watch?v=fwyQtq0Dnyw",
        type: "video",
      },
    ],
  },
];
