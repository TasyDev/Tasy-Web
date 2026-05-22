---
title: "Este Portafolio (tasy.work)"
description: "Portfolio en Astro + MDX, con componentes React y Tailwind para un sitio rápido, mantenible y escalable."
category: "DEVELOPMENT"
image: "https://i.ibb.co/2GTpkvf/Captura-de-pantalla-2026-05-21-162523.png"
---

## El Desafío

Construir un portafolio moderno que cargue rápido, se vea premium, sea fácil de actualizar (sin CMS pesado) y que permita escalar el contenido a futuro (blog + proyectos + nuevas secciones) sin perder control del diseño.

## El Resultado

Un sitio hecho con **Astro** orientado a performance, donde el contenido vive en **MDX** (versionable en Git) y la UI reutilizable vive en componentes (Astro + React), estilados con **Tailwind CSS**.

## ¿Qué es y qué hace?

Este proyecto es el sitio que estás viendo: un portafolio donde los **proyectos** y el **blog** se publican a partir de archivos `.mdx`, renderizados con rutas estáticas y un layout consistente.

La idea es que actualizar el sitio sea tan simple como:

- Agregar/editar un `.mdx` en `src/content/portfolio/` o `src/content/blog/`
- Dejar que Astro construya y publique las páginas

## ¿Cómo está hecho?

La arquitectura separa claramente **contenido**, **rutas** y **componentes**.

### 1) Contenido con Content Collections (MDX)

Los proyectos se guardan como MDX con *frontmatter* tipado (título, descripción, categoría e imagen).

```
src/
  content/
    portfolio/
      automatizador-de-carruseles.mdx
      web-personal-con-non-profit.mdx
      portafolio-tasy-work.mdx
```

El tipado y carga del contenido se define en `src/content.config.ts` usando `defineCollection` + `glob()`.

### 2) Rutas estáticas por slug

Las páginas se generan con rutas dinámicas estáticas:

- `src/pages/portafolio/[slug].astro` para cada proyecto (por archivo MDX)
- `src/pages/blog/[slug].astro` para cada post del blog

El `slug` sale del nombre del archivo (por ejemplo: `automatizador-de-carruseles.mdx` -> `/portafolio/automatizador-de-carruseles`).

### 3) Componentes UI + "islas" React

Astro renderiza el HTML principal y sólo hidrata lo necesario:

- Secciones interactivas (filtros/búsqueda/listas, CTAs, hero animado, etc.) usan `client:load` para hidratar React donde aporta valor.
- Los estilos se resuelven con Tailwind, manteniendo consistencia visual sin CSS "suelto".

### 4) MDX con componentes personalizados

En el detalle de proyecto, el MDX se renderiza con componentes de tipografía para mantener el look & feel (por ejemplo, mapear `h2`, `h3`, `blockquote` a componentes propios).

## Stack técnico

| Capa | Tecnología |
|------|-----------|
| Framework | Astro |
| Contenido | MDX + Astro Content Collections |
| UI | Astro + React (islas) |
| Estilos | Tailwind CSS |
| Animación | Framer Motion |
| DX/UI QA | Storybook |
| SEO | Sitemap integration |

## ¿Qué facilita?

**Actualización sin fricción.** Publicar un proyecto es crear un archivo MDX (sin tocar rutas ni lógica).

**Mantenibilidad.** La UI vive en componentes reutilizables; el contenido vive separado y versionado.

**Performance real.** Astro prioriza HTML estático y sólo hidrata lo interactivo.

**Escalabilidad.** El mismo patrón aplica para blog, portafolio y cualquier colección futura.

## Visión a futuro: CRM para posts y carga automática

El siguiente paso ideal es crear un **CRM propio** donde:

- Se creen y gestionen posts/proyectos desde una interfaz (con drafts, categorías, imágenes, SEO, etc.)
- El sitio consuma ese contenido automáticamente (por API o sincronización) y lo cargue como fuente de datos para renderizarlo

En otras palabras: pasar de "contenido en archivos" a un "panel de publicación" que alimente el portafolio y el blog sin perder performance ni control del diseño.

## Repo

[tasy.work](https://tasy.work/)
