import { Link2 } from 'lucide-react';

interface LinkItemProps {
	title: string;
	url: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ title, url }) => {
	return (
		<div className='flex items-center justify-between gap-4'>
			<div className='space-y-1.5'>
				<span className='block font-medium text-zinc-100'>{title}</span>
				<a
					href={url}
					className='block text-xs text-zinc-400 truncate hover:text-zinc-200'
				>
					{url}
				</a>
			</div>
			<Link2 className='text-zinc-400 size-5 shrink-0' />
		</div>
	);
};

export default LinkItem;
