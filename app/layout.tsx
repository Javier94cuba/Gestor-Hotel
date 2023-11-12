import './ui/global.css';
import { montserrat } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased flex`}>
        {children}
        </body>
    </html>
  );
}
