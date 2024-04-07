'use client'

import { Container } from '@components/Container'
import Link from 'next/link'

export const Navbar = () => (
	<div className="border-b mb-2 ">
		<Container>
			<nav className="flex lg:flex-row justify-between items-center my-2">
				<div className="flex w-full lg:w-auto items-center justify-between">
					<Link href="/" className="text-lg">
						<span className="font-black text-md text-black bg-yellow-500 rounded-md px-1 py-1">
							TMDB
						</span>
					</Link>
				</div>
				<div className="flex gap-8">
					<Link
						href="https://github.com/paanSinghCoder/tmdb-infinite-scroll"
						target="_blank"
						className="cursor-pointer p-2 hover:bg-slate-100 rounded-md">
						<img alt="" src="/github.png" className="h-4 w-4" />
					</Link>
				</div>
			</nav>
		</Container>
	</div>
)
