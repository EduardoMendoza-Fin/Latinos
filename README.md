# Mendoza Estrategias Financieras – Landing Page

Landing page moderna construida con Next.js y Tailwind CSS para apoyar a inmigrantes latinoamericanos recién llegados a Québec, Canadá.

## Requisitos previos

- Node.js 18 o superior
- Variables de entorno configuradas en un archivo `.env.local`:
  - `AIRTABLE_API_KEY`
  - `AIRTABLE_BASE_ID`

Consulta `.env.example` para un punto de partida.

## Scripts disponibles

- `npm run dev` – Inicia el servidor de desarrollo en `http://localhost:3000`.
- `npm run build` – Genera la compilación de producción.
- `npm run start` – Ejecuta la aplicación en modo producción.
- `npm run lint` – Ejecuta las validaciones de ESLint.

## Integración con Airtable

Los formularios envían los datos a la tabla `Table1` del base indicado mediante la API de Airtable. Puedes personalizar el nombre de la tabla o los campos ajustando los controladores en `app/api/analysis/route.js` y `app/api/guide/route.js`.
