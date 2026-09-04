# Territorio Digital

Plataforma web abierta para preservar y compartir saberes, memorias y expresiones culturales del Valle del Cauca.

El proyecto conecta comunidades, territorios y generaciones alrededor de la oralidad, la música, los bailes, las costumbres, la gastronomía, las artesanías y la medicina tradicional.

## Proyecto

**Territorio Digital – Ingenio Mayaguez / Universidad ICESI**  
**Escuela de Liderazgo Mayagüez**

## MVP

Este repositorio contiene un MVP funcional desarrollado como una Single Page Application. Actualmente trabaja con datos mock y permite simular el flujo completo de consulta y publicación de saberes.

### Funcionalidades

- Catálogo de saberes culturales con imágenes.
- Filtros por municipio, categoría, comunidad y diversidad étnica.
- Municipios del Valle del Cauca representados en el catálogo.
- Categorías de oralidad, música, gastronomía, danza, costumbres, artesanías y medicina tradicional.
- Módulo independiente de Comunidades.
- Módulo de Integrantes de la Escuela de Liderazgo Mayagüez.
- Formulario público para cargar nuevos saberes.
- Carga de imágenes, audios, videos y documentos.
- Modal con detalle de cada registro y referencias culturales.
- Diseño responsive para computador, tableta y móvil.
- Navegación móvil con menú hamburguesa.
- Identidad visual inspirada en la comunidad y en el logo del proyecto.

## Tecnologías

- React 18
- Vite
- Tailwind CSS 4
- Lucide React
- JavaScript ES Modules

## Requisitos

- Node.js 18 o superior.
- npm.

## Instalación

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone https://github.com/melissa992/Territorio_digital_web.git
cd Territorio_digital_web
```

Instala las dependencias:

```bash
npm install
```

## Desarrollo local

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en la URL que indique Vite, normalmente:

```text
http://localhost:5173/
```

## Compilación para producción

```bash
npm run build
```

Para previsualizar la compilación:

```bash
npm run preview
```

## Estructura principal

```text
.
├── comunidad.jpeg
├── logo.jpeg
├── index.html
├── package.json
├── src
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

- `src/App.jsx`: estructura, navegación, filtros, formulario y modales.
- `src/data.js`: datos culturales mock, categorías, municipios y estilos.
- `src/index.css`: estilos globales, fondo, patrones y animaciones.
- `logo.jpeg`: logo institucional.
- `comunidad.jpeg`: fotografía de la comunidad usada en el banner principal.

## Estado de los registros

En esta versión MVP, los registros cargados se agregan al catálogo durante la sesión activa del navegador. Todavía no se almacenan en una base de datos permanente.

## Próxima fase: Supabase

Para producción se recomienda conectar:

- Supabase Database para los registros.
- Supabase Storage para imágenes, audios, videos y PDF.
- Políticas RLS para controlar la lectura y publicación de contenidos.
- Moderación de registros antes de hacerlos públicos.

La aplicación puede desplegarse en Vercel y utilizar variables de entorno como:

```env
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_clave_publica
```

Nunca se debe publicar una clave `service_role` en el frontend.

## Despliegue en Vercel

1. Importa el repositorio desde GitHub en Vercel.
2. Usa `npm run build` como comando de compilación.
3. Usa `dist` como directorio de salida si Vercel lo solicita.
4. Configura las variables de entorno cuando se conecte Supabase.
5. Despliega el proyecto.

## Créditos

Proyecto desarrollado para la **Escuela de Liderazgo Mayagüez**, con el apoyo de **Ingenio Mayagüez** y la **Universidad ICESI**.

Territorio Digital busca reconocer la diversidad cultural del Valle del Cauca y fortalecer el intercambio de saberes entre comunidades.