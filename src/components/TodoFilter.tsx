import { FilterType } from '@/types/types';
import React from 'react';
import { Button } from './ui/button';

type Props = {
	filter: FilterType;
	onFilterChange: (filter: FilterType) => void;
};

const filters: { value: FilterType; label: string }[] = [
	{ value: 'all', label: 'All' },
	{ value: 'active', label: 'Active' },
	{ value: 'completed', label: 'Completed' },
];

export const TodoFilter: React.FC<Props> = ({ filter, onFilterChange }) => {
	return (
		<div className='flex items-center gap-1'>
			{filters.map(({ value, label }) => (
				<Button
					key={value}
					variant='ghost'
					size='sm'
					className={`text-xs py-0.5 px-1 h-auto rounded-sm capitalize ${
						filter === value ? 'border border-indigo-300' : 'border-transparent'
					}`}
					onClick={() => onFilterChange(value)}
				>
					{label}
				</Button>
			))}
		</div>
	);
};
