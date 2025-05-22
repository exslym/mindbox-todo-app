import { describe, expect, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component', () => {
	test('should add task, mark as completed, and clear completed tasks', () => {
		// Render the main App component
		render(<App />);

		const input = screen.getByPlaceholderText(/what needs to be done/i);

		// 1. Add a new task by typing and pressing Enter
		fireEvent.change(input, { target: { value: 'New Task' } });
		fireEvent.keyDown(input, { key: 'Enter' });

		// 2. Check if the new task is rendered in the list
		expect(screen.getByText(/new task/i)).toBeInTheDocument();

		// 3. Find the task element and click it to mark as completed
		const taskElement = screen.getByText(/new task/i).closest('li');
		if (taskElement) {
			fireEvent.click(taskElement);
		}

		// 4. Verify that the task has line-through style (via class)
		const taskText = screen.getByText(/new task/i);
		expect(taskText).toHaveClass('line-through');

		// 5. Find and click the "Clear completed" button
		const clearButton = screen.getByRole('button', {
			name: /clear completed/i,
		});
		fireEvent.click(clearButton);

		// 6. Ensure the completed task is no longer in the DOM
		expect(() => screen.getByText(/new task/i)).toThrow();
	});
});
