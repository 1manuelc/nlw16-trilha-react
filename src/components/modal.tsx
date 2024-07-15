import { X } from 'lucide-react';
import { ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const modalVariants = tv({
	base: 'rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5',
	variants: {
		size: {
			default: 'w-[640px]',
			small: 'w-fit',
		},
	},
	defaultVariants: {
		size: 'default',
	},
});

interface ModalProps extends VariantProps<typeof modalVariants> {
	title: string;
	description?: ReactNode;
	children?: ReactNode;
	closeModalFn: () => void;
}

const Modal: React.FC<ModalProps> = ({
	title,
	description,
	children,
	closeModalFn,
	size,
}) => {
	return (
		<div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
			<div className={modalVariants({ size: size })}>
				<div className='space-y-2'>
					<div className='flex items-center justify-between'>
						<h2 className='text-lg font-semibold'>{title}</h2>
						<button onClick={closeModalFn}>
							<X className='size-5 text-zinc-400' />
						</button>
					</div>
					<p className='text-sm text-zinc-400'>{description}</p>
				</div>

				{children}
			</div>
		</div>
	);
};

export default Modal;
