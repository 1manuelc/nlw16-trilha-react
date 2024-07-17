import { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
	base: 'rounded-lg px-5 font-medium flex items-center justify-center gap-2',
	variants: {
		variant: {
			primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
			secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
			invisible: 'bg-transparent',
		},
		size: {
			default: 'py-2',
			full: 'w-full h-11',
			fit: 'w-fit p-0',
			fill: 'w-full',
		},
	},

	defaultVariants: {
		variant: 'primary',
		size: 'default',
	},
});

interface ButtonProps
	extends ComponentProps<'button'>,
		VariantProps<typeof buttonVariants> {
	children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant,
	size,
	...props
}) => {
	return (
		<button
			{...props}
			className={buttonVariants({ variant: variant, size: size })}
		>
			{children}
		</button>
	);
};

export default Button;
