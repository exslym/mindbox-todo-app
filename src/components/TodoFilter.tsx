import React from 'react';
import { Button } from './ui/button';

type Props = {
	filter: string;
	onFilterChange: (filter: string) => void;
};

export const TodoFilter: React.FC<Props> = ({ filter, onFilterChange }) => {
	return (
		<div className='flex items-center justify-between gap-1'>
			<Button
				variant='ghost'
				size='sm'
				className={`text-xs py-0.5 px-1 h-auto rounded-sm ${
					filter === 'all' ? 'border border-indigo-300' : 'border-transparent'
				}`}
				onClick={() => onFilterChange('all')}
			>
				All
			</Button>
			<Button
				variant='ghost'
				size='sm'
				className={`text-xs py-0.5 px-1 h-auto rounded-sm ${
					filter === 'active'
						? 'border border-indigo-300'
						: 'border-transparent'
				}`}
				onClick={() => onFilterChange('active')}
			>
				Active
			</Button>
			<Button
				variant='ghost'
				size='sm'
				className={`text-xs py-0.5 px-1 h-auto rounded-sm ${
					filter === 'completed'
						? 'border border-indigo-300'
						: 'border-transparent'
				}`}
				onClick={() => onFilterChange('completed')}
			>
				Completed
			</Button>
		</div>
	);
};
