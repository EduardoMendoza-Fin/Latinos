'use client';

import { useState } from 'react';

const initialState = {
  nombre: '',
  telefono: '',
  correo: '',
  idioma: 'Español',
  mensaje: ''
};

export default function AnalysisForm() {
  const [formValues, setFormValues] = useState(initialState);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Enviando tu solicitud…' });

    try {
      const response = await fetch('/api/analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValues)
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar la solicitud.');
      }

      setFormValues(initialState);
      setStatus({
        type: 'success',
        message: '✅ Gracias, un asesor se pondrá en contacto contigo muy pronto.'
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          'Hubo un problema enviando tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.'
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl bg-white p-8 shadow-xl"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-azulLatino">
            Nombre completo
          </span>
          <input
            type="text"
            name="nombre"
            value={formValues.nombre}
            onChange={handleChange}
            required
            className="rounded-xl border border-azulLatino/20 bg-crema px-4 py-3 text-azulLatino shadow-sm focus:border-rojoLatino"
            placeholder="Escribe tu nombre"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-azulLatino">
            Teléfono
          </span>
          <input
            type="tel"
            name="telefono"
            value={formValues.telefono}
            onChange={handleChange}
            required
            className="rounded-xl border border-azulLatino/20 bg-crema px-4 py-3 text-azulLatino shadow-sm focus:border-rojoLatino"
            placeholder="Ej. 514-555-1234"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-azulLatino">
            Correo electrónico
          </span>
          <input
            type="email"
            name="correo"
            value={formValues.correo}
            onChange={handleChange}
            required
            className="rounded-xl border border-azulLatino/20 bg-crema px-4 py-3 text-azulLatino shadow-sm focus:border-rojoLatino"
            placeholder="tucorreo@email.com"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-azulLatino">
            Idioma preferido
          </span>
          <select
            name="idioma"
            value={formValues.idioma}
            onChange={handleChange}
            className="rounded-xl border border-azulLatino/20 bg-crema px-4 py-3 text-azulLatino shadow-sm focus:border-rojoLatino"
          >
            <option value="Español">Español</option>
            <option value="Francés">Francés</option>
          </select>
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold uppercase tracking-wide text-azulLatino">
          Mensaje (opcional)
        </span>
        <textarea
          name="mensaje"
          value={formValues.mensaje}
          onChange={handleChange}
          rows={4}
          className="rounded-xl border border-azulLatino/20 bg-crema px-4 py-3 text-azulLatino shadow-sm focus:border-rojoLatino"
          placeholder="Cuéntanos qué te gustaría lograr en Canadá"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-rojoLatino px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-rojoLatino/90"
        disabled={status.type === 'loading'}
      >
        {status.type === 'loading' ? 'Enviando…' : 'Enviar mi solicitud'}
      </button>
      {status.type !== 'idle' && (
        <p
          className={`text-center text-sm font-medium ${
            status.type === 'success'
              ? 'text-emerald-600'
              : status.type === 'error'
              ? 'text-rojoLatino'
              : 'text-azulLatino'
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
