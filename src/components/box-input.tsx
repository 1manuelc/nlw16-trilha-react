import { ComponentProps, ReactNode } from 'react';

interface BoxInputProps extends ComponentProps<'input'> {
	children?: ReactNode;
}

const BoxInput: React.FC<BoxInputProps> = ({ children, ...props }) => {
	return (
		<div className='h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
			{children}
			<input
				className=' bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2 flex-1 outline-none'
				{...props}
			/>
		</div>
	);
};

export default BoxInput;
