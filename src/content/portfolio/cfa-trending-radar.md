---
title: "CFA Trending (CFA Radar)"
description: "Dashboard interno para monitorear y analizar tendencias de TikTok, con sync a Apify, agregaciones semanales y auth segura."
category: "DEVELOPMENT"
image: "https://i.ibb.co/Gfyz0ZPh/Captura-de-pantalla-2026-05-21-164132.png"
---

## El Desafío

El equipo de comunicaciones necesitaba **detectar tendencias reales de TikTok** (hashtags, palabras, cuentas, audios, temas y videos) sin depender de "ver qué aparece en el feed", y además poder **comparar semana a semana** con un historial auditable.

En otras palabras: pasar de un proceso manual y subjetivo a un **radar confiable** con datos, filtros y consistencia.

## El Resultado

Una app interna tipo **dashboard** que centraliza el análisis de tendencias:

- Sincroniza datos por keywords desde **Apify**
- Normaliza y persiste el dataset en **PostgreSQL**
- Calcula agregaciones y métricas semanales listas para consumo
- Protege el acceso con **JWT + cookie HTTP-only**

## ¿Qué es y qué hace?

`CFA-Trending` (también llamado **CFA Radar**) es una aplicación interna construida para monitorear contenido en tendencia de TikTok dentro de un foco de interés definido (sector/keywords).

Desde el dashboard, el equipo puede ver:

- Métricas semanales (volumen, comportamiento, señales de crecimiento)
- Hashtags y palabras en tendencia
- Cuentas destacadas
- Temas y audios "hot"
- Videos "featured" para inspiración y referencia

## ¿Cómo funciona?

El flujo end-to-end está diseñado para ser simple de usar y robusto por dentro:

```
UI (Next.js) -> /api/v1/tiktok?sync=true (o sync=false) -> Hono (logic)
  -> Apify (scrape keyword search) -> transform (CleanVideo)
  -> PostgreSQL (drizzle) -> agregaciones -> payload del dashboard
```

### 1) Login y control de acceso

El usuario inicia sesión desde la UI. La API valida credenciales (variables de entorno) y, si son correctas:

- Firma un JWT
- Lo guarda como cookie `auth` HTTP-only

Luego un middleware protege rutas: si no hay cookie válida, redirige al login.

### 2) Sincronización (sync) y versionado por lotes

Cuando el dashboard carga puede pedir datos con `sync=false` (leer el último lote).
Si se presiona "Sincronizar" o no hay datos previos, se ejecuta `sync=true`:

- Se consulta Apify
- Se transforman los items crudos a un esquema limpio (`CleanVideo`)
- Se guardan en DB con un `syncId` para poder rastrear de dónde salió cada lote

### 3) Agregaciones para el dashboard

Con el último `syncId` se calculan estructuras listas para UI:

- `weeklyMetrics`
- `trendingHashtags`, `trendingWords`
- `accountsTable`
- `trendingTopics`, `trendingAudios`
- `featuredVideos`

Esto mantiene el frontend liviano: la UI sólo renderiza, filtra y presenta.

## Stack técnico

| Capa | Tecnología |
|------|-----------|
| Frontend | Next.js (App Router) + React + TypeScript |
| UI | Tailwind CSS + lucide-react |
| Backend API | Hono dentro de Next (`/api/*`) |
| Auth | JWT + cookie HTTP-only |
| DB | PostgreSQL + drizzle-orm + postgres-js |
| Fuente de datos | Apify (TikTok keyword search) |
| Validación | zod + react-hook-form |
| Testing | vitest (+ playwright browser support) |
| UI workshop | Storybook |

## ¿Qué facilita?

**Estandariza el análisis.** Todos miran el mismo set de métricas y tendencias calculadas con la misma lógica.

**Hace el histórico auditable.** Con `syncId` se puede rastrear y comparar datasets por lotes.

**Reduce fricción operativa.** Un botón de "Sincronizar" reemplaza tareas manuales repetitivas.

**Permite operar con datos reales o mock.** Con `USE_MOCK_DATA=true` el equipo puede desarrollar/demostrar sin depender de la fuente externa.

## Nota importante (seguridad)

Este tipo de app maneja secretos (DB, JWT, tokens). El enfoque recomendado es:

- No versionar `.env`
- Rotar credenciales si el repo se comparte
- Mantener secretos en variables del entorno del deploy o en un vault

## Visión a futuro

Evolucionar el radar hacia un flujo editorial más completo:

- Guardar "selecciones" y notas internas por video/tema
- Crear colecciones y reportes por campaña
- Exportaciones automatizadas (resúmenes semanales para el equipo)

## Repo

Privado (app interna).
