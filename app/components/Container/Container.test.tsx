import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import { Container } from '.'

describe('Container', () => {
	it('renders children correctly', () => {
		const mockChildren = <div>Hello, world!</div>

		const { getByText } = render(<Container>{mockChildren}</Container>)
	})
})
