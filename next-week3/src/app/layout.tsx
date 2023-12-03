import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
// import './globals.css'
import './style.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <nav className='myNav'>
        <ul>  
        
        <li> <Link className='Link'  href="/">Home</Link></li>
         <li><Link href="/Blogs">Blogs</Link></li>
         <li><Link href="/About">About</Link></li>
         <li><Link href="/Contact">Contact</Link></li>
         </ul>
        </nav>
        
        {children}</body>
    </html>
  )
}
