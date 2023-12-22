import '@/app/ui/global.css'
import { moichy_pop_one } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${moichy_pop_one.className} antialiased`}>{children}</body>
    </html>
  );
}
