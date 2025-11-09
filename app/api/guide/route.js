import { NextResponse } from 'next/server';

const AIRTABLE_URL = (table) =>
  `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${table}`;

export async function POST(request) {
  try {
    const { nombre, correo } = await request.json();

    if (!nombre || !correo) {
      return NextResponse.json({ error: 'Faltan datos requeridos.' }, { status: 400 });
    }

    const airtableResponse = await fetch(AIRTABLE_URL('Table1'), {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: {
          Nombre: nombre,
          Correo: correo,
          Origen: 'Landing Page - Guía PDF'
        }
      })
    });

    if (!airtableResponse.ok) {
      const errorText = await airtableResponse.text();
      console.error('Airtable error', errorText);
      return NextResponse.json({ error: 'Error al conectar con Airtable.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Guide form error', error);
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
}
