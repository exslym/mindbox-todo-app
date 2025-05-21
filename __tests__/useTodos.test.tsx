import { describe, expect, test } from '@jest/globals';
import { act, renderHook } from '@testing-library/react';
import { useTodos } from '../src/hooks/useTodos';

describe('useTodos Hook', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	test('should add a new todo item', () => {
		const { result } = renderHook(() => useTodos());

		act(() => {
			result.current.addTodo('New task');
		});

		expect(result.current.todos).toHaveLength(1);
		expect(result.current.todos[0]).toMatchObject({
			text: 'New task',
			completed: false,
		});
	});

	test('should toggle the completed status of a todo item', async () => {
		const { result } = renderHook(() => useTodos());

		await act(async () => {
			result.current.addTodo('Task 1');
		});

		const id = result.current.todos[0]?.id;

		await act(async () => {
			result.current.toggleTodo(id || '');
		});

		expect(result.current.todos[0]).toMatchObject({
			completed: true,
		});
	});

	test('should delete a todo item', async () => {
		const { result } = renderHook(() => useTodos());

		await act(async () => {
			result.current.addTodo('Task 1');
		});

		const id = result.current.todos[0]?.id;

		await act(async () => {
			result.current.deleteTodo(id || '');
		});

		expect(result.current.todos).toHaveLength(0);
	});

	test('should clear all completed todos', async () => {
		const { result } = renderHook(() => useTodos());

		await act(async () => {
			result.current.addTodo('Task 1');
			result.current.addTodo('Task 2');
		});

		const id = result.current.todos[0]?.id;

		await act(async () => {
			result.current.toggleTodo(id || '');
			result.current.clearCompleted();
		});

		expect(result.current.todos).toHaveLength(1);
		expect(result.current.todos[0].text).toBe('Task 2');
	});

	test('should return active todos in activeTodos list', async () => {
		const { result } = renderHook(() => useTodos());

		await act(async () => {
			result.current.addTodo('Task 1');
			result.current.addTodo('Task 2');
		});

		const id = result.current.todos[0]?.id;

		await act(async () => {
			result.current.toggleTodo(id || '');
		});

		expect(result.current.activeTodos).toHaveLength(1);
		expect(result.current.activeTodos[0].text).toBe('Task 2');
	});

	test('should return completed todos in completedTodos list', async () => {
		const { result } = renderHook(() => useTodos());

		await act(async () => {
			result.current.addTodo('Task 1');
		});

		const id = result.current.todos[0]?.id;

		await act(async () => {
			result.current.toggleTodo(id || '');
		});

		expect(result.current.completedTodos).toHaveLength(1);
		expect(result.current.completedTodos[0].text).toBe('Task 1');
	});
});
