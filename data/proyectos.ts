export interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  youtubeId: string;
}

export const misProyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "Proyecto InventPro",
    // USAMOS BACKTICKS (`) PARA EL TEXTO MULTILÍNEA
    descripcion: `En este video presento InventPro, una solución integral diseñada para optimizar la gestión de inventario y órdenes de compra en pequeñas y medianas empresas. El enfoque principal fue desarrollar una herramienta escalable, segura y eficiente, aplicando principios de Arquitectura por Capas para separar la lógica de negocio de la interfaz de usuario.

    🛠️ Stack Tecnológico:
    Frontend: Desarrollado con React.js, enfocado en una experiencia de usuario fluida y reactiva.

    Backend: Construido con Node.js y Express.js, garantizando un procesamiento de datos rápido y confiable.

    Base de Datos: Uso de PostgreSQL para la persistencia de datos estructurados.

    Seguridad: Implementación de JWT (JSON Web Tokens) para autenticación de usuarios y Zod para validación de esquemas de datos.

    Funcionalidades Clave:
    Gestión dinámica de productos y stock.
    Control de órdenes de compra con trazabilidad.
    Módulo de seguridad para acceso restringido de usuarios.
    Consumo de APIs REST con manejo de estados eficiente.`,
    youtubeId: "fwyQtq0Dnyw",
  },
];
