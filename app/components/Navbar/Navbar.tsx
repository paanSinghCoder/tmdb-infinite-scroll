import React from 'react'
import { render, screen } from '@testing-library/react'
import { Navbar } from '.'

describe('Navbar component', () => {
	it('renders TMDB link with correct text', () => {
		render(<Navbar />)
		const tmdbLinkElement = screen.getByText('TMDB')
		expect(tmdbLinkElement).toBeInTheDocument()
	})

	it('renders GitHub link with correct href', () => {
		render(<Navbar />)
		const githubLinkElement = screen.getByRole('link', { name: /GitHub/i })
		expect(githubLinkElement).toHaveAttribute(
			'href',
			'https://github.com/paanSinghCoder/tmdb-infinite-scroll'
		)
	})

	it('opens GitHub link in new tab', () => {
		render(<Navbar />)
		const githubLinkElement = screen.getByRole('link', { name: /GitHub/i })
		expect(githubLinkElement).toHaveAttribute('target', '_blank')
		expect(githubLinkElement).toHaveAttribute('rel', 'noreferrer')
	})
})
