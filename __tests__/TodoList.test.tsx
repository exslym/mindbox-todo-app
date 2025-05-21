import { describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { TodoList } from '../src/components/TodoList';

const todos = [
	{ id: '1', text: 'Task 1', completed: false },
	{ id: '2', text: 'Task 2', completed: true },
];

describe('TodoList Component', () => {
	test('should render all tasks passed via props', () => {
		render(<TodoList todos={todos} onToggle={() => {}} />);

		expect(screen.getByText(/task 1/i)).toBeInTheDocument();
		expect(screen.getByText(/task 2/i)).toBeInTheDocument();
	});

	test('should apply line-through class to completed task text', () => {
		render(<TodoList todos={todos} onToggle={() => {}} />);

		const task1Text = screen.getByText(/task 1/i);
		const task2Text = screen.getByText(/task 2/i);

		expect(task2Text).toHaveClass('line-through');
		expect(task1Text).not.toHaveClass('line-through');
	});

	test('should call onToggle when a task is clicked', () => {
		const onToggle = jest.fn();

		render(<TodoList todos={todos} onToggle={onToggle} />);

		const taskElement = screen.getByText(/task 1/i).closest('li');

		if (taskElement) {
			fireEvent.click(taskElement);
		}

		expect(onToggle).toHaveBeenCalledTimes(1);
	});
});
