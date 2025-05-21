import { describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { ClearCompletedButton } from '../src/components/ClearCompletedButton';

describe('ClearCompletedButton Component', () => {
	test('should call onClearCompleted when button is clicked', () => {
		const onClearCompleted = jest.fn();
		render(<ClearCompletedButton onClearCompleted={onClearCompleted} />);

		const button = screen.getByText(/clear completed/i);
		fireEvent.click(button);

		expect(onClearCompleted).toHaveBeenCalledTimes(1);
	});
});
