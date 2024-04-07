import React from 'react'
import { render, screen } from '@testing-library/react'
import Loader from '.'

describe('Loader component', () => {
	it('renders the loader with the correct alt text', () => {
		render(<Loader />)
		const loaderElement = screen.getByAltText('Loading icon')
		expect(loaderElement).toBeInTheDocument()
	})

	it('renders the loader image with the correct source', () => {
		render(<Loader />)
		const loaderImageElement = screen.getByRole('img')
		expect(loaderImageElement).toHaveAttribute(
			'src',
			'https://www.svgrepo.com/show/448500/loading.svg'
		)
	})
})
