import React from 'react';
import type { Todo } from '../types/types';
import { TodoItem } from './TodoItem';

type Props = {
	todos: Todo[];
	onToggle: (id: string) => void;
};

export const TodoList: React.FC<Props> = ({ todos, onToggle }) => {
	if (todos.length === 0) return null;

	return (
		<ul>
			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
			))}
		</ul>
	);
};
