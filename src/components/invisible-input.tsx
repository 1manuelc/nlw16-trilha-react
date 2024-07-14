import { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const inputVariants = tv({
	base: 'flex items-center gap-2 bg-transparent',
	variants: {
		width_variant: {
			default: '',
			full: 'flex-1',
			small: 'w-40',
		},
	},
	defaultVariants: {
		width_variant: 'default',
	},
});

interface InvisibleInputProps
	extends ComponentProps<'input'>,
		VariantProps<typeof inputVariants> {
	children?: ReactNode;
}

const InvisibleInput: React.FC<InvisibleInputProps> = ({
	children,
	width_variant,
	...props
}) => {
	return (
		<div className={inputVariants({ width_variant: width_variant })}>
			{children}
			<input
				className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
				{...props}
			/>
		</div>
	);
};

export default InvisibleInput;
