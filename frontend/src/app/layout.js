import "./globals.css";
import { Rubik, Bruno_Ace } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik',
  display: 'swap',
});

const brunoAce = Bruno_Ace({
  subsets: ['latin'],
  weight: '400', // Bruno Ace only supports 400
  variable: '--font-bruno-ace',
  display: 'swap',
});


export const metadata = {
  title: "DIGMIN-2025 | Digital Intelligence for Green Mining and Industrial Networks",
  description: "International Conference on Digital Intelligence for Green Mining and Industrial Networks (DIGMIN-2025), September 12-13, 2025 at IIT-ISM Dhanbad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${brunoAce.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
