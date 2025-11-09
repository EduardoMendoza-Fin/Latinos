import Image from 'next/image';
import AnalysisForm from '../components/AnalysisForm';
import GuideForm from '../components/GuideForm';
import { Analytics } from "@vercel/analytics/next"


const heroImage =
  'https://images.unsplash.com/photo-1574015974293-817f0ebebb6b?auto=format&fit=crop&w=1600&q=80';
import eduardoImage from '../public/eduardo.jpg';
  

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Llegaste a Canadá para construir un mejor futuro.  
              <span className="text-rojoLatino block mt-3">Ahora te ayudamos a protegerlo.</span>
              </h1>
            <p className="max-w-2xl text-lg md:text-xl text-azulLatino/80 leading-relaxed">
             Orientación gratuita para inmigrantes latinoamericanos en Québec.  
             Aprende cómo cuidar tu dinero y tu familia en Canadá.
             </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/14385212649?text=Hola%20Eduardo!%20Estoy%20interesado%20y%20me%20gustaría%20obtener%20más%20detalles." 
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-rojoLatino px-8 py-4 text-center text-lg font-semibold text-white shadow-lg transition hover:bg-rojoLatino/90"
                >
                Solicita tu análisis gratuito
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
              title: 'La inflación y los impuestos cambian tus planes sin que te des cuenta',
              description: 'Cada año pagas más sin darte cuenta. Entender cómo proteger tus ingresos y optimizar tus impuestos puede marcar la diferencia entre avanzar o quedarte igual.',
              icon: '📊'
            },
            {
              title: 'El gobierno te da beneficios… pero solo si sabes cómo pedirlos',
              description: 'En Canadá existen ayudas, créditos y programas que pueden mejorar tu vida financiera. Pero muchos inmigrantes nunca los reclaman simplemente porque no saben que existen',
              icon: '🇨🇦'
            },
            {
              title: 'La educación de tus hijos puede ser gratuita… si comienzas a planificar temprano',
              description: 'El gobierno puede aportar hasta 30 % adicional a tu ahorro para estudios si usas el plan correcto. Comenzar ahora puede cubrir gran parte de su educación futura.',
              icon: '🎓'
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
          “Canadá ofrece oportunidades increíbles, pero necesitas entender el sistema para aprovecharlas.”
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
                description: '💡 Consejos personalizados para mejorar tu protección y ahorro.'
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
               href="https://wa.me/14385212649?text=Hola%20Eduardo!%20Estoy%20interesado%20y%20me%20gustaría%20obtener%20más%20detalles."
               target="_blank"
               rel="noopener noreferrer"
               className="rounded-full bg-rojoLatino px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-rojoLatino/90">
              Solicitar mi análisis gratuito ahora
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold md:text-4xl">Testimonios de familias como la tuya</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              quote:
                '“Llegamos hace tres años y Eduardo nos explicó cosas que nadie nos había dicho sobre los beneficios del gobierno y cómo ahorrar impuestos.”',
              name: 'María, Colombia 🇨🇴'
            },
            {
              quote:
                '“Servicio claro y profesional”',
              name: 'Carlos, México 🇲🇽'
            },
            {
              quote:
                'Nos ayudó a abrir una cuenta de ahorro para la educación de nuestra hija y entender cómo funciona el sistema aquí.”',
              name: 'Familia García, El Salvador 🇸🇻'
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
              src={eduardoImage}
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
              Hola, soy <strong>Eduardo Mendoza Colin</strong>, asesor en seguridad financiera con iA Groupe Financier y fundador de <em>Mendoza Estrategias Financieras</em>.
            </p>
            <p className="text-lg text-azulLatino/80">
              Mi misión es ayudar a las familias latinoamericanas a entender el sistema financiero canadiense, proteger lo que han trabajado tan duro para construir, y enseñarles a aprovechar las oportunidades que este país ofrece.
            </p>
            <p className="text-lg text-azulLatino/80">
              En nuestras reuniones hay una orientación clara, en tu idioma, con empatía y honestidad.
              Porque cuando entiendes cómo funciona el dinero en Canadá, puedes vivir con más tranquilidad y confianza.
            </p>
            <div className="flex flex-col gap-6">
              <div className="text-base text-azulLatino/70">
                <p>— <strong>Eduardo Mendoza</strong></p>
                <p>Asesor en seguridad financiera</p>
                <p><em>(Disponible en español, francés y ingles)</em></p>
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
                  href="https://wa.me/14385212649?text=Hola%20Eduardo!%20Estoy%20interesado%20y%20me%20gustaría%20obtener%20más%20detalles."
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
          Tu familia merece tranquilidad y tú también.
        </p>
        <div className="mt-8 flex justify-center">
          <a
             href="https://wa.me/14385212649?text=Hola%20Eduardo!%20Estoy%20interesado%20y%20me%20gustaría%20obtener%20más%20detalles."
             target="_blank"
             rel="noopener noreferrer"
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
      </footer>
    </main>
  );
}
