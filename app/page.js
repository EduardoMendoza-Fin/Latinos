import Image from 'next/image';
import AnalysisForm from '../components/AnalysisForm';
import GuideForm from '../components/GuideForm';

const heroImage =
  'https://images.unsplash.com/photo-1574015974293-817f0ebebb6b?auto=format&fit=crop&w=1600&q=80';
const aboutImage =
  'https://images.unsplash.com/photo-1604079628040-94301bb21b37?auto=format&fit=crop&w=900&q=80';

export default function HomePage() {
  return (
    <main className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-b-[60px] bg-crema">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Familia latina frente a su hogar en Canadá"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-crema via-crema/90 to-azulLatino/30" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-32 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6 text-azulLatino">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-rojoLatino shadow">
              🇨🇦 Bienvenido a tu nueva vida en Québec
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Empieza tu nueva vida en Canadá con seguridad y tranquilidad.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-azulLatino/90 md:text-xl">
              Análisis financiero gratuito para inmigrantes latinoamericanos en Québec. Aprende cómo proteger a tu familia y construir tu futuro aquí.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#analisis"
                className="rounded-full bg-rojoLatino px-8 py-4 text-center text-lg font-semibold text-white shadow-lg transition hover:bg-rojoLatino/90"
              >
                Solicita tu análisis gratuito
              </a>
              <a
                href="#guia"
                className="rounded-full border border-azulLatino bg-azulLatino px-8 py-4 text-center text-lg font-semibold text-white shadow-lg transition hover:bg-azulLatino/90"
              >
                Descarga el guía gratuito
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-azulLatino/70">
              <span className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow">
                🇲🇽 🇨🇴 🇸🇻 Atención en tu idioma
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow">
                🤝 Primera reunión sin costo
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Lo que nadie te explica al llegar a Canadá 🇨🇦</h2>
        <p className="mt-4 text-lg text-azulLatino/80">
          Llegar a Québec es emocionante, pero también trae preguntas sobre cómo proteger a tu familia y construir estabilidad.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'La RAMQ no cubre todo',
              description: 'No paga tu renta ni tus gastos si te enfermas.',
              icon: '🏥'
            },
            {
              title: 'El crédito es tu reputación',
              description: 'Sin crédito, no puedes comprar, alquilar o financiar nada.',
              icon: '💳'
            },
            {
              title: 'Tu familia depende de tu planificación',
              description: 'Protegerlos aquí es diferente a tu país.',
              icon: '💰'
            }
          ].map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col gap-4 rounded-3xl bg-white p-8 text-left shadow-xl"
            >
              <span className="text-4xl">{item.icon}</span>
              <h3 className="text-xl font-semibold text-azulLatino">{item.title}</h3>
              <p className="text-base text-azulLatino/80">{item.description}</p>
            </article>
          ))}
        </div>
        <blockquote className="mt-10 rounded-3xl bg-azulLatino px-8 py-6 text-lg font-medium text-crema shadow-lg">
          “Canadá ofrece oportunidades increíbles — pero necesitas entender el sistema para aprovecharlas.”
        </blockquote>
      </section>

      <section className="mx-auto max-w-6xl px-6" id="beneficios">
        <div className="rounded-3xl bg-white px-8 py-12 shadow-2xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">¿Qué recibirás gratis?</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                title: 'Evaluación personalizada',
                description: '📋 Evaluación personalizada de tu situación financiera.'
              },
              {
                title: 'Consejos accionables',
                description: '💡 Consejos simples para mejorar tu protección y ahorro.'
              },
              {
                title: 'Guía PDF exclusiva',
                description: '📘 Guía PDF: “Primeros pasos financieros para inmigrantes en Canadá”.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-3xl bg-crema px-6 py-8 text-center shadow-lg">
                <p className="text-lg font-semibold text-azulLatino">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href="#analisis"
              className="rounded-full bg-rojoLatino px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-rojoLatino/90"
            >
              Solicitar mi análisis gratuito ahora
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 lg:flex-row" id="analisis">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold md:text-4xl">Completa el formulario para recibir tu análisis financiero gratuito.</h2>
          <p className="text-lg text-azulLatino/80">
            Sin compromiso, 100 % confidencial. Un asesor certificado te guiará paso a paso para crear tu plan en Canadá.
          </p>
          <ul className="space-y-3 text-base text-azulLatino/80">
            <li>✔️ Coordinamos la reunión en tu idioma preferido.</li>
            <li>✔️ Recibirás recomendaciones claras y adaptadas a tu realidad.</li>
            <li>✔️ Todo el proceso se realiza con estándares de privacidad canadienses.</li>
          </ul>
        </div>
        <div className="flex-1">
          <AnalysisForm />
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 lg:flex-row" id="guia">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold md:text-4xl">Descarga nuestra guía gratuita</h2>
          <p className="text-lg text-azulLatino/80">
            “Los 7 pasos financieros para comenzar bien en Canadá.” Descubre cómo construir tu crédito, proteger a tu familia y aprovechar los programas del gobierno.
          </p>
          <p className="text-base text-azulLatino/70">
            Al dejar tus datos recibirás el PDF automáticamente en tu correo electrónico.
          </p>
        </div>
        <div className="flex-1">
          <GuideForm />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold md:text-4xl">Testimonios de familias como la tuya</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              quote:
                '“Gracias a esta orientación, entendí cómo funciona todo aquí y ahora tengo mi seguro y mi crédito.”',
              name: 'María, Colombia 🇨🇴'
            },
            {
              quote:
                '“Nunca pensé que necesitaba este tipo de ayuda. Eduardo fue muy claro y amable.”',
              name: 'José, México 🇲🇽'
            },
            {
              quote:
                '“Nos dieron tranquilidad para proteger a nuestros hijos mientras construimos nuestro nuevo hogar.”',
              name: 'Familia López, El Salvador 🇸🇻'
            }
          ].map((testimonial, index) => (
            <figure
              key={index}
              className="flex h-full flex-col justify-between rounded-3xl bg-white p-8 shadow-xl"
            >
              <p className="text-lg text-azulLatino/80">{testimonial.quote}</p>
              <figcaption className="mt-6 text-sm font-semibold text-azulLatino">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl rounded-[40px] bg-[#FAF8F4] px-6 py-16 shadow-2xl">
        <div className="mb-12 text-center text-azulLatino">
          <p className="text-lg font-semibold text-rojoLatino">“Dejar tu país es un acto de valentía. Mi trabajo es ayudarte a que valga la pena.”</p>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr] lg:items-center">
          <div className="relative h-80 overflow-hidden rounded-3xl shadow-xl lg:h-[420px]">
            <Image
              src={aboutImage}
              alt="Eduardo Mendoza asesor financiero"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-azulLatino/30 via-transparent to-transparent" />
          </div>
          <div className="space-y-6 text-azulLatino">
            <h2 className="text-3xl font-bold md:text-4xl">¿Quién soy yo?</h2>
            <p className="text-lg text-azulLatino/80">
              Hola, soy <strong>Eduardo Mendoza</strong>, asesor en seguridad financiera con iA Groupe Financier y fundador de <em>Mendoza Estrategias Financieras</em>.
              Nací en América Latina y, como muchos de ustedes, llegué a Canadá con sueños, metas y también con muchas preguntas sobre cómo funciona todo aquí.
            </p>
            <p className="text-lg text-azulLatino/80">
              Mi misión es ayudar a las familias latinoamericanas a entender el sistema financiero canadiense, proteger lo que han trabajado tan duro para construir, y enseñarles a aprovechar las oportunidades que este país ofrece.
            </p>
            <p className="text-lg text-azulLatino/80">
              En nuestras reuniones no hay ventas, solo orientación clara, en tu idioma, con empatía y honestidad.
              Porque cuando entiendes cómo funciona el dinero en Canadá, puedes vivir con más tranquilidad y confianza.
            </p>
            <div className="flex flex-col gap-6">
              <div className="text-base text-azulLatino/70">
                <p>— <strong>Eduardo Mendoza</strong></p>
                <p>Asesor en seguridad financiera</p>
                <p><em>(Disponible en español y francés)</em></p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-azulLatino/70">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow">
                  🌎 Comunidad latina
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow">
                  🇨🇦 Canadá
                </span>
              </div>
              <div>
                <a
                  href="https://wa.me/15145551234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-rojoLatino px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-rojoLatino/90"
                >
                  Habla conmigo directamente
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl rounded-3xl bg-azulLatino px-10 py-16 text-center text-crema shadow-2xl">
        <h2 className="text-3xl font-bold md:text-4xl">
          Deja que te ayudemos a construir seguridad, paso a paso.
        </h2>
        <p className="mt-4 text-lg text-crema/90">
          Tu familia merece tranquilidad — y tú también.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#analisis"
            className="rounded-full bg-rojoLatino px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-rojoLatino/90"
          >
            Solicitar mi análisis gratuito
          </a>
        </div>
      </section>

      <footer className="mx-auto mt-10 flex w-full max-w-5xl flex-col items-center gap-4 px-6 pb-10 text-center text-sm text-azulLatino/70">
        <div className="flex items-center gap-2 text-base font-semibold text-azulLatino">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rojoLatino text-white">
            ME
          </span>
          Mendoza Estrategias Financieras
        </div>
        <p>© 2025 Mendoza Estrategias Financieras. Todos los derechos reservados.</p>
        <p>Información general – no constituye consejo financiero formal.</p>
      </footer>
    </main>
  );
}
