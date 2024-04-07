import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '.'

describe('Header component', () => {
	it('renders the header title correctly', () => {
		render(<Header />)
		const titleElement = screen.getByText(/Popular movies/i)
		expect(titleElement).toBeInTheDocument()
	})

	it('renders the header subtitle correctly', () => {
		render(<Header />)
		const subtitleElement = screen.getByText(
			/Explore the most popular movies from around the world on TMDB\. Keep scrolling\./i
		)
		expect(subtitleElement).toBeInTheDocument()
	})
})
