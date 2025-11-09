'use client';

import { useState } from 'react';

export default function GuideForm() {
  const [formValues, setFormValues] = useState({ nombre: '', correo: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Enviando…' });

    try {
      const response = await fetch('/api/guide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValues)
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar la solicitud.');
      }

      setFormValues({ nombre: '', correo: '' });
      setStatus({ type: 'success', message: '✅ Gracias, tu guía está en camino a tu correo.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Ocurrió un problema. Por favor intenta de nuevo en unos minutos.'
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-lg sm:flex-row sm:items-end"
    >
      <div className="flex-1">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-azulLatino">
            Nombre
          </span>
          <input
            type="text"
            name="nombre"
            value={formValues.nombre}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-azulLatino/20 bg-crema px-4 py-3 text-azulLatino shadow-sm focus:border-rojoLatino"
            placeholder="Tu nombre"
          />
        </label>
      </div>
      <div className="flex-1">
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
            className="w-full rounded-xl border border-azulLatino/20 bg-crema px-4 py-3 text-azulLatino shadow-sm focus:border-rojoLatino"
            placeholder="tucorreo@email.com"
          />
        </label>
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-azulLatino px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-azulLatino/90 sm:w-auto"
        disabled={status.type === 'loading'}
      >
        {status.type === 'loading' ? 'Enviando…' : 'Recibir el guía PDF'}
      </button>
      {status.type !== 'idle' && (
        <p
          className={`w-full text-center text-sm font-medium sm:w-auto ${
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
