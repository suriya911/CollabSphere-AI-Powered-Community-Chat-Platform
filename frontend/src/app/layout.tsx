import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'CollabSphere - AI-Powered Community Chat',
    description: 'A full-stack, asynchronous communication platform with AI-powered features',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="min-h-screen bg-gray-50">
                    {children}
                </main>
            </body>
        </html>
    )
} 