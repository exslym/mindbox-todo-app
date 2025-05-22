import { useState } from 'react';
import { ClearCompletedButton } from './components/ClearCompletedButton';
import { TodoFilter } from './components/TodoFilter';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { useTodos } from './hooks/useTodos';
import { FilterType } from './types/types';

function App() {
	const {
		todos,
		addTodo,
		toggleTodo,
		clearCompleted,
		activeTodos,
		completedTodos,
	} = useTodos();

	const [filter, setFilter] = useState<FilterType>('all');

	const filteredTodos =
		filter === 'all'
			? todos
			: filter === 'active'
			? activeTodos
			: completedTodos;

	return (
		<div className='min-h-screen flex items-center justify-center'>
			<div className='relative max-w-3xl w-full p-4'>
				<div
					aria-hidden='true'
					className='absolute bottom-1 right-1/2 translate-x-1/2 h-10 w-[89%] bg-white dark:bg-slate-700 rounded-xs shadow-md z-0'
				></div>
				<div
					aria-hidden='true'
					className='absolute bottom-2.5 right-1/2 translate-x-1/2 h-10 w-[91%] bg-white dark:bg-slate-600 rounded-xs shadow-md z-0'
				></div>

				<div className='relative z-10'>
					<header className='p-4'>
						<h1 className='text-5xl font-medium text-center text-indigo-400'>
							todos
						</h1>
					</header>
					<main className='p-4 bg-white dark:bg-slate-500 rounded-xs shadow-md'>
						<TodoInput onAdd={addTodo} />
						<TodoList todos={filteredTodos} onToggle={toggleTodo} />
						<div className='mt-3 flex items-center justify-between gap-10'>
							<p className='text-xs'>{`${
								todos.length - completedTodos.length
							} items left`}</p>
							<TodoFilter filter={filter} onFilterChange={setFilter} />
							<ClearCompletedButton onClearCompleted={clearCompleted} />
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
