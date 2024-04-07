import React from 'react'
import { render, screen } from '@testing-library/react'
import MovieCard from '.'

describe('MovieCard component', () => {
	const mockProps = {
		poster_path: '/example_poster_path.jpg',
		title: 'Example Movie',
		vote_average: 7.5,
		release_date: '2022-01-01',
		original_language: 'en',
		overview: 'This is an example overview text for the movie.'
	}

	it('renders movie card with correct title', () => {
		render(<MovieCard {...mockProps} />)
		const titleElement = screen.getByText('Example Movie')
		expect(titleElement).toBeInTheDocument()
	})

	it('renders movie card with correct vote average', () => {
		render(<MovieCard {...mockProps} />)
		const voteAverageElement = screen.getByText('7.5')
		expect(voteAverageElement).toBeInTheDocument()
	})

	it('renders movie card with correct release year', () => {
		render(<MovieCard {...mockProps} />)
		const releaseYearElement = screen.getByText('2022')
		expect(releaseYearElement).toBeInTheDocument()
	})

	it('renders movie card with correct language', () => {
		render(<MovieCard {...mockProps} />)
		const languageElement = screen.getByText('EN')
		expect(languageElement).toBeInTheDocument()
	})

	it('renders movie card with correct overview', () => {
		render(<MovieCard {...mockProps} />)
		const overviewElement = screen.getByText('This is an example overview text for the movie.')
		expect(overviewElement).toBeInTheDocument()
	})
})
