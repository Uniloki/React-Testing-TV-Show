import React from 'react'
import { render } from '@testing-library/react'
import Episodes from './Episodes'

const mockData = {
	image: {
		original: 'logo192.png',
	},
	name: 'episode',
	summary: 'summary',
	season: 'season',
	_embedded: {
		episodes: [
			{
				id: 'episode',
				image: {
					medium: 'logo192.png',
				},
				name: 'episode',
				number: 'number',
				summary: 'summary',
				runtime: 'runtime',
				season: 'season',
			},
			{
				id: 'episode2',
				image: {
					medium: 'logo192.png',
				},
				name: 'episode',
				number: 'number',
				summary: 'summary',
				runtime: 'runtime',
				season: 'season',
			},
		],
	},
}

const mockShow = [
	{
		id: 'episode',
		image: {
			medium: 'logo192.png',
		},
		name: 'episode',
		number: 'number',
		summary: 'summary',
		runtime: 'runtime',
		season: 'season',
	},
	{
		id: 'episode2',
		image: {
			medium: 'logo192.png',
		},
		name: 'episode',
		number: 'number',
		summary: 'summary',
		runtime: 'runtime',
		season: 'season',
	},
]

test('component renders', () => {
	const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />)

	expect(queryAllByTestId('show')).toHaveLength(0)
	expect(queryAllByTestId('show')).toStrictEqual([])

	rerender(<Episodes episodes={mockShow} />)

	expect(queryAllByTestId('show')).toHaveLength(2)
})
