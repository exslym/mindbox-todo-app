import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Todo } from '../types/types';

const STORAGE_KEY = 'mindbox.todos';

export const useTodos = () => {
	const [todos, setTodos] = useState<Todo[]>(() => {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (!saved) return [];
		try {
			return JSON.parse(saved);
		} catch (e) {
			console.warn('Failed to load tasks', e);
			return [];
		}
	});

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
	}, [todos]);

	const addTodo = (text: string) => {
		if (!text.trim()) return;
		const newTodo: Todo = { id: uuidv4(), text, completed: false };
		setTodos(prev => [...prev, newTodo]);
	};

	const toggleTodo = (id: string) => {
		setTodos(prev =>
			prev.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		);
	};

	const deleteTodo = (id: string) => {
		setTodos(prev => prev.filter(todo => todo.id !== id));
	};

	const clearCompleted = () => {
		setTodos(prev => prev.filter(todo => !todo.completed));
	};

	const activeTodos = todos.filter(t => !t.completed);
	const completedTodos = todos.filter(t => t.completed);

	return {
		todos,
		addTodo,
		toggleTodo,
		deleteTodo,
		clearCompleted,
		activeTodos,
		completedTodos,
	};
};
