import React, { useState } from 'react';
import { Input } from './ui/input';

type Props = {
	onAdd: (text: string) => void;
};

export const TodoInput: React.FC<Props> = ({ onAdd }) => {
	const [text, setText] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			if (text.trim()) {
				onAdd(text);
				setText('');
			}
		}
	};

	const ChevronDownIcon = () => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='20'
			height='20'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='text-gray-300'
		>
			<polyline points='6 9 12 15 18 9'></polyline>
		</svg>
	);

	return (
		<div className='border-b border-gray-200 dark:border-gray-400 flex items-center'>
			<span className='mr-4'>
				<ChevronDownIcon />
			</span>
			<Input
				value={text}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
				placeholder='What needs to be done?'
				className='w-full px-0 py-2 border-none focus:outline-none focus:ring-0 focus-visible:ring-0 !text-lg placeholder:text-lg placeholder:italic placeholder:font-light placeholder:text-gray-400'
			/>
		</div>
	);
};
