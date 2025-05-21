import { describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../src/components/TodoItem';

const mockTodo = {
	id: '1',
	text: 'Test task',
	completed: false,
};

describe('TodoItem Component', () => {
	test('should call onToggle when clicked', () => {
		const onToggle = jest.fn();
		render(<TodoItem todo={mockTodo} onToggle={onToggle} />);

		const taskElement = screen.getByText(/test task/i);
		fireEvent.click(taskElement);

		expect(onToggle).toHaveBeenCalledWith(mockTodo.id);
	});
});
