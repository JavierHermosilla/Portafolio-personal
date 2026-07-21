# Implementación de mejoras del portafolio

Fecha de implementación: 21 de julio de 2026.

## 1. Resumen

Se implementó únicamente la primera fase de mejoras del portafolio. No se modificaron los repositorios de HendaFlux ni InventPro y no se realizó despliegue. Posteriormente, Javier autorizó trasladar esta implementación al repositorio Git verdadero para crear un commit y enviarlo a `main`.

El sitio ahora presenta a Javier Hermosilla como **Egresado de Ingeniería en Informática** y **Desarrollador de Software Junior | Full Stack**. HendaFlux aparece como proyecto principal, InventPro como segundo proyecto y la experiencia profesional queda después de ambos. También se corrigieron el modal, la jerarquía de encabezados, los estados de foco, las áreas táctiles, el SEO técnico, la carga de YouTube y las dependencias con vulnerabilidades altas conocidas.

En la actualización de contenido confirmada por Javier se incorporó el CV proporcionado, se reemplazó LinkedIn por la URL vigente, se precisó el aporte individual en InventPro y se actualizó la experiencia de Ripley. El PDF se copió sin modificarlo y conserva temporalmente el LinkedIn anterior, inconsistencia que deberá corregirse en una nueva versión del documento.

## 2. Archivos modificados

- `app/globals.css`
- `app/layout.tsx`
- `app/not-found.tsx` (nuevo)
- `app/page.tsx`
- `app/robots.ts` (nuevo)
- `app/sitemap.ts` (nuevo)
- `components/ExperienceCard.tsx`
- `components/Footer.tsx`
- `components/Hero.tsx`
- `components/Navbar.tsx`
- `components/Skills.tsx`
- `components/VideoCard.tsx`
- `data/proyectos.ts`
- `package.json`
- `package-lock.json`
- `public/CV-Javier-Hermosilla.pdf` (nuevo, copia exacta del archivo proporcionado)
- `public/hendaflux-logo.png` (nuevo, recurso oficial)
- `IMPLEMENTACION_PORTAFOLIO.md` (nuevo)

La implementación se desarrolló inicialmente en una copia sin metadatos `.git`, donde no era posible obtener un diff fiable. Para la entrega final se clonó el repositorio verdadero `JavierHermosilla/Portafolio-personal`, se trasladaron únicamente los archivos implementados y se repitieron las validaciones antes del commit.

En la actualización de contenido confirmada se modificaron `components/Hero.tsx`, `components/Footer.tsx`, `components/ExperienceCard.tsx`, `components/VideoCard.tsx`, `data/proyectos.ts` y este informe; se añadieron los dos recursos de `public/`. No se modificaron `package.json`, `package-lock.json` ni otras dependencias durante esta actualización.

En la corrección puntual posterior se actualizaron únicamente `data/proyectos.ts`, `components/Footer.tsx` y este informe: repositorio definitivo de InventPro, generación académica 2026 y eliminación del correo visual duplicado bajo el botón de contacto.

## 3. Cambios implementados

- Hero con nombre, condición académica, posicionamiento junior, tipo de soluciones, tecnologías y acceso inmediato a proyectos y contacto.
- HendaFlux como primer proyecto y caso principal, con logo oficial, stack confirmado y enlace a la plataforma pública.
- InventPro como segundo proyecto, descrito como proyecto académico de tres integrantes y con el backend completo atribuido a Javier según confirmación directa.
- Proyectos ubicados antes de experiencia, habilidades y formación.
- Tarjetas con enlaces separados y sin botones ficticios para demo o documentación.
- Contacto simplificado con enlaces `mailto:`, LinkedIn y GitHub.
- CTA “Descargar CV” visible en el hero y enlazado al PDF local.
- LinkedIn actualizado a `https://www.linkedin.com/in/javier-hermosilla-cabezas`.
- Experiencia en Ripley actualizada con cargo, periodo y tres responsabilidades confirmadas por el CV.
- Formación académica corregida a `Duoc UC · Generación 2026`.
- Bloque de contacto simplificado para conservar un único botón “Enviar correo”, sin repetir la dirección debajo.
- Habilidades reducidas a capacidades respaldadas por el contenido disponible.
- Modal técnico reconstruido sin instalar una dependencia adicional.
- Página 404 en español y rutas nativas de SEO.

## 4. Decisiones de contenido

- Se utilizó siempre “Egresado de Ingeniería en Informática”; no se afirma que Javier haya obtenido el título profesional.
- InventPro se presenta como proyecto académico de tres integrantes: Javier estuvo a cargo del backend completo y los otros dos integrantes desarrollaron el frontend.
- El aporte backend confirmado incluye API REST, JWT, Zod, PostgreSQL y endpoints probados mediante Postman.
- No se inventaron métricas, clientes, usuarios, resultados comerciales, cargos ni responsabilidades.
- HendaFlux no incluye enlace a repositorio porque no se proporcionó una URL pública real.
- El logo provisional de HendaFlux procede del recurso oficial `https://www.hendaflux.com/logofix.png`; se copió sin alterar su diseño.
- No se incorporó una imagen social ni una captura externa genérica.
- Se mantuvo la identidad visual oscura existente y la estructura de una sola página.

## 5. Enlaces corregidos o eliminados

Enlaces publicados y comprobados:

- HendaFlux: `https://hendaflux.com` respondió 200 y redirige a `https://www.hendaflux.com/`.
- InventPro, repositorio confirmado por Javier: `https://github.com/JavierHermosilla/inventpro`. El botón apunta exclusivamente a esa URL; una solicitud pública automatizada respondió 404, por lo que el repositorio puede estar privado o todavía no publicado.
- InventPro, video: `https://www.youtube.com/watch?v=fwyQtq0Dnyw` respondió 200.
- Perfil GitHub: `https://github.com/JavierHermosilla` respondió 200.
- Correo: `mailto:javierhermosilla0@gmail.com`; se verificó la dirección y no se abrió el cliente ni se envió correo.
- LinkedIn visible: actualizado a `https://www.linkedin.com/in/javier-hermosilla-cabezas`. La solicitud automatizada respondió 999 por la protección de LinkedIn, no por un enlace local obsoleto.
- CV: `/CV-Javier-Hermosilla.pdf`, copiado sin cambios y con atributo `download` en el CTA.

Enlaces no publicados:

- Documentación de API, demo o URL pública de InventPro: no se encontró una URL válida confirmada.
- Repositorio de HendaFlux: no se proporcionó una URL pública.

Todos los enlaces externos que abren una pestaña nueva usan `rel="noopener noreferrer"`. No se dejaron enlaces `#` que aparenten una acción inexistente.

## 6. Mejoras de accesibilidad

- Jerarquía corregida a un `h1`, encabezados de sección `h2` y contenidos `h3`.
- Regiones y artículos con nombres accesibles.
- Foco visible global y estilos específicos coherentes con el fondo oscuro.
- Contraste reforzado en textos pequeños, etiquetas y footer.
- Texto del footer aumentado a 12 px.
- Áreas visibles de enlaces y botones importantes comprobadas con un mínimo de 44 px en ambos ejes.
- Menú móvil con `aria-expanded`, `aria-controls`, nombre dinámico y cierre con `Escape`.
- Soporte para `prefers-reduced-motion` en animaciones, transiciones y desplazamiento.
- Modal con `role="dialog"`, `aria-modal="true"`, `aria-labelledby` y `aria-describedby`.
- Foco inicial en el botón de cierre, retención circular de foco, cierre con `Escape` y devolución del foco al botón que lo abrió.
- Fondo marcado como `inert` mientras el modal está abierto y scroll del `body` bloqueado.
- Botón de cierre con nombre accesible y área de 44 × 44 px.

La prueba en navegador confirmó cada estado del modal, incluido el ciclo `Shift+Tab`/`Tab`, la limpieza de `inert` y la restauración del scroll al cerrar.

## 7. Mejoras de SEO y rendimiento

- Título: `Javier Hermosilla | Desarrollador Full Stack / Backend Junior`.
- Meta description coherente con la condición de egresado y el enfoque profesional.
- Canonical y Open Graph apuntando a la URL pública actual: `https://portafolio-personal-zeta-mauve.vercel.app`.
- Metadata de Twitter/X con tarjeta `summary` y sin imagen inventada.
- Idioma del documento configurado como español.
- `robots.txt` generado mediante Metadata Routes de Next.js.
- `sitemap.xml` generado mediante Metadata Routes de Next.js.
- 404 personalizada en español, con respuesta HTTP 404 real.
- YouTube no crea ningún `iframe` durante la carga inicial.
- El video se carga únicamente después de una acción explícita, usando `youtube-nocookie.com`, `loading="lazy"` y un contenedor con relación 16:9.
- Los componentes sin interacción se mantienen como componentes de servidor; solo navegación y tarjetas interactivas usan cliente.

No se agregaron páginas individuales, datos estructurados sin verificar ni una optimización masiva basada en estimaciones.

## 8. Dependencias y seguridad

Estado inicial comprobado:

- Next.js `16.1.6`.
- React y React DOM `19.2.3`.
- `npm audit`: 9 vulnerabilidades, distribuidas en 1 baja, 2 moderadas y 6 altas.
- La dependencia directa Next coincidía con avisos altos confirmados. La auditoría previa también había identificado, entre otros, `GHSA-8h8q-6873-q5fj`, `GHSA-q4gf-8mx6-v5v3` y `GHSA-26hh-7cqf-hhc6`.

Actualización controlada:

- Next.js se actualizó de `16.1.6` a `16.2.11`, versión estable parcheada y compatible dentro de la misma línea mayor.
- `eslint-config-next` se alineó en `16.2.11`.
- `npm audit fix` sin `--force` actualizó únicamente dependencias transitivas compatibles del lockfile.
- No se instaló una nueva biblioteca ni se ejecutó una actualización mayor.

Estado final:

- 0 vulnerabilidades críticas.
- 0 vulnerabilidades altas.
- 0 vulnerabilidades bajas.
- 2 vulnerabilidades moderadas: Next aparece afectado de forma indirecta por el PostCSS interno menor a `8.5.10` (`GHSA-qx2v-qp2m-jg93`).
- La única solución automática que propone npm requiere `--force` y degradaría Next a `9.3.3`, un cambio incompatible e inseguro para esta aplicación. No se aplicó.

El riesgo residual queda acotado y documentado hasta que exista una versión estable compatible de Next que actualice ese PostCSS interno. En la actualización de contenido posterior no se ejecutó `npm audit fix`, no se actualizaron dependencias y no cambió el lockfile.

## 9. Comandos ejecutados y resultados

- Lectura de instrucciones, auditoría anterior, estructura y componentes: completada.
- `pwd`: `C:\Users\javie\Desktop\Portafolio-personal-main`.
- `git rev-parse --show-toplevel`: falló; no existe un repositorio Git en esta ruta ni en sus padres.
- `git status --short`: falló por ausencia de `.git`.
- `git diff --stat`: falló por ausencia de `.git`.
- No se ejecutó `git init`. Se clonó el repositorio verdadero y los cambios se trasladaron al checkout limpio de `main`.
- Búsqueda de `AGENTS.md`: no existe.
- CV adjunto: localizado en Descargas, renderizado visualmente y copiado con el mismo SHA-256 a `public/CV-Javier-Hermosilla.pdf`.
- Logo de HendaFlux: identificado mediante los recursos cargados por el sitio oficial y copiado desde `/logofix.png` a `public/hendaflux-logo.png`.
- `npm ls next react react-dom eslint-config-next --depth=0`: árbol directo válido; Next y configuración ESLint en `16.2.11`, React en `19.2.3`.
- `npm audit --json` inicial: 9 avisos, incluidos 6 altos.
- `npm audit fix --dry-run --json`: confirmó actualizaciones transitivas compatibles.
- `npm audit fix` sin `--force`: redujo el resultado a 2 avisos moderados.
- `npm run lint`: aprobado, 0 errores y 0 advertencias.
- `npx tsc --noEmit`: aprobado, 0 errores.
- Tests: no ejecutados porque `package.json` no contiene script `test` y no se encontraron archivos de prueba.
- `npm run build`: aprobado con Next `16.2.11`; generó `/`, `/_not-found`, `/robots.txt` y `/sitemap.xml` como contenido estático.
- Servidor local en `http://localhost:3000`: respondió 200 y quedó disponible para revisión manual.
- `/CV-Javier-Hermosilla.pdf`: respondió 200 con contenido PDF.
- El SHA-256 del PDF servido coincide con el adjunto original: `036EAFDFBB43FF205F6909508630AF53A2704CF8B6D866994775F49D5A559C3A`.
- `/robots.txt`: 200.
- `/sitemap.xml`: 200.
- `/ruta-inexistente`: 404 con contenido en español.
- Consola del navegador tras portada, modal, video y 404: 0 errores y 0 advertencias.

## 10. Validación responsive

| Ancho | Resultado |
|---|---|
| 320 px | Sin desbordamiento horizontal; hero, CTA y tarjetas apilados; menú móvil operativo. |
| 375 px | Sin desbordamiento horizontal; texto y controles contenidos; CTA apilados. |
| 768 px | Sin desbordamiento horizontal; navegación de escritorio visible y proyectos en una columna. |
| 1024 px | Sin desbordamiento horizontal; proyectos en dos columnas alineadas. |
| 1440 px | Sin desbordamiento horizontal; contenido limitado al ancho máximo y proyectos en dos columnas. |

También se comprobó navegación con teclado, apertura y cierre del menú móvil, modal completo, restauración de foco, enlaces visibles, tamaño de controles, carga diferida del video y ausencia de problemas en consola. El logo oficial de HendaFlux mantuvo su relación de aspecto en los cinco anchos: 139 × 128 px en móvil y 157 × 144 px en escritorio, sin distorsión observable.

## 11. Elementos no implementados y motivo

- Video de HendaFlux: todavía no está disponible; se utiliza provisionalmente su logo oficial.
- Repositorio público de HendaFlux: no existe una URL pública proporcionada.
- Demo, documentación o API pública de InventPro: no existe una URL funcional confirmada.
- CV con LinkedIn corregido: la copia proporcionada todavía contiene `linkedin.com/in/javier-hermosilla`; el PDF no se editó por instrucción expresa.
- Imagen Open Graph: no existe un recurso adecuado confirmado.
- Solución forzada de los dos avisos moderados: npm propone degradar Next a `9.3.3`; se rechazó por incompatibilidad.
- Tests automatizados: no existe infraestructura de pruebas en el repositorio y agregarla queda fuera de esta fase.
- Deploy: no realizado. Commit y push fueron autorizados posteriormente por Javier para publicar esta implementación en el repositorio verdadero.

## 12. Información que Javier todavía debe confirmar

- Confirmar si el repositorio de HendaFlux puede ser público o debe permanecer privado.
- Entregar una nueva versión del CV con LinkedIn actualizado a `linkedin.com/in/javier-hermosilla-cabezas`.
- Proporcionar el video real de HendaFlux cuando esté listo para reemplazar la presentación provisional.
- Confirmar si existe una URL vigente para documentación, API o demo de InventPro.
- Confirmar que la URL canónica de Vercel seguirá siendo el dominio público definitivo.

## 13. Próximos pasos recomendados

1. Reemplazar el PDF por una versión idéntica en contenido profesional, pero con el LinkedIn vigente.
2. Sustituir el logo provisional por el video real de HendaFlux cuando esté disponible.
3. Publicar documentación o demo de InventPro solo cuando exista una URL estable.
4. Revisar nuevamente `npm audit` cuando Next publique una versión estable que actualice su PostCSS interno.
5. En una fase posterior, personalizar el README, añadir pruebas focalizadas y valorar cabeceras de seguridad compatibles con YouTube.
6. Revisar el resultado versionado en `origin/main` antes de cualquier despliegue.
