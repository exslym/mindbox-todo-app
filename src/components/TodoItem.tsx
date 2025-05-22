import React from 'react';
import type { Todo } from '../types/types';

type Props = {
	todo: Todo;
	onToggle: (id: string) => void;
};

const CheckboxIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className='w-5 h-5 text-green-500'
	>
		<polyline points='20 6 9 17 4 12' />
	</svg>
);

export const TodoItem: React.FC<Props> = ({ todo, onToggle }) => {
	return (
		<li
			className='flex items-center py-2 border-b border-gray-00 dark:border-gray-400 cursor-pointer'
			onClick={() => onToggle(todo.id)}
			role='button'
		>
			<div className='mr-3 flex-shrink-0'>
				{todo.completed ? (
					<span className='flex items-center justify-center w-6 h-6 border border-gray-400 rounded-full'>
						<CheckboxIcon />
					</span>
				) : (
					<span className='flex items-center justify-center w-6 h-6 border border-transparent rounded-full'></span>
				)}
			</div>

			<span
				className={`${
					todo.completed ? 'line-through text-gray-400' : ''
				} text-lg`}
			>
				{todo.text}
			</span>
		</li>
	);
};
