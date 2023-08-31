import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer, Header } from "@common/index";

import '@styles/globals.scss';

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'YRGN',
  description: 'Yarigin app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Header/>
    <main>
      {children}
    </main>
    <Footer/>
    </body>
    </html>
  )
}
