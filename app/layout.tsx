import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './utils/globals.css'
import { Navbar } from '@components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'TMBD | Popular movies',
	description: 'List of most popular movies'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
