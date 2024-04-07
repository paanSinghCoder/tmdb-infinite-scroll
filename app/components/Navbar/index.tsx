'use client'

import Link from 'next/link'
import { Container } from '@components/Container'
import { NavbarItem } from '@components/NavbarItem'

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
					<NavbarItem label="Github" onClick={() => null} />
				</div>
			</nav>
		</Container>
	</div>
)
