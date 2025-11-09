import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata = {
  title: 'Mendoza Estrategias Financieras',
  description:
    'Análisis financiero gratuito y guía PDF para inmigrantes latinoamericanos en Québec, Canadá.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="bg-crema text-azulLatino">
        {children}
      </body>
    </html>
  );
}
