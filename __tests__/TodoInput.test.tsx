import { describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { TodoInput } from '../src/components/TodoInput';

describe('TodoInput Component', () => {
	test('should call onAdd with input text when Enter is pressed', () => {
		const onAdd = jest.fn();

		render(<TodoInput onAdd={onAdd} />);
		const input = screen.getByPlaceholderText(/what needs to be done/i);

		fireEvent.change(input, { target: { value: 'New task' } });
		fireEvent.keyDown(input, { key: 'Enter' });

		expect(onAdd).toHaveBeenCalledWith('New task');
	});
});
