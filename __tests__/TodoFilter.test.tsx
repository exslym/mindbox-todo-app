import { describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { TodoFilter } from '../src/components/TodoFilter';

describe('TodoFilter Component', () => {
	test('should call onFilterChange with "active" when Active button is clicked', () => {
		const onFilterChange = jest.fn();
		render(<TodoFilter filter='all' onFilterChange={onFilterChange} />);

		const activeButton = screen.getByText(/active/i);
		fireEvent.click(activeButton);

		expect(onFilterChange).toHaveBeenCalledWith('active');
	});

	test('should call onFilterChange with "completed" when Completed button is clicked', () => {
		const onFilterChange = jest.fn();
		render(<TodoFilter filter='all' onFilterChange={onFilterChange} />);

		const completedButton = screen.getByText(/completed/i);
		fireEvent.click(completedButton);

		expect(onFilterChange).toHaveBeenCalledWith('completed');
	});

	test('should call onFilterChange with "all" when All button is clicked', () => {
		const onFilterChange = jest.fn();
		render(<TodoFilter filter='active' onFilterChange={onFilterChange} />);

		const allButton = screen.getByText(/all/i);
		fireEvent.click(allButton);

		expect(onFilterChange).toHaveBeenCalledWith('all');
	});
});
