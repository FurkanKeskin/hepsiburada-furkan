import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { ProductListContext } from '../../../context/Context';
import Search from './Search';

describe('function called on click', () => {
	let searchBox;
	beforeEach(() => {
		const mockValue = {
			setSearch: jest.fn(),
			search: jest.fn()
		};
		// eslint-disable-next-line testing-library/no-render-in-setup
		render(
			<ProductListContext.Provider value={mockValue}>
				<Search />
			</ProductListContext.Provider>
		);

		searchBox = screen.getByTestId('searchBox');
	});

	it('search apple', () => {
		userEvent.type(searchBox, 'apple');
		expect(searchBox.value).toBe('apple');
	});
});
