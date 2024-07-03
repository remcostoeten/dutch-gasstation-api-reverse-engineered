import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// NEXT_PUBLIC_API_URL='https://www.independer.nl/api/autoverzekering/gasstation/getgasstations?v=61&addressInformation=lemmer&fuelType=2&range=5&sorting=1'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
