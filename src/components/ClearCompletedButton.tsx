import React from 'react';
import { Button } from './ui/button';

type Props = {
	onClearCompleted: () => void;
};

export const ClearCompletedButton: React.FC<Props> = ({ onClearCompleted }) => {
	return (
		<Button
			variant='ghost'
			size='sm'
			onClick={onClearCompleted}
			className='text-xs py-0.5 px-1 h-auto rounded-sm'
		>
			Clear completed
		</Button>
	);
};
