import { CircleCheck } from 'lucide-react';
import { CircleDashed } from 'lucide-react';

interface ActivityItemProps {
	title: string;
	time: string;
	isDone: boolean;
}

// TODO: feature: isDone dynamic marking

const ActivityItem: React.FC<ActivityItemProps> = ({
	title,
	time,
	isDone = false,
}) => {
	return (
		<div className='px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3'>
			{isDone ? (
				<CircleCheck className='size-5 text-lime-300' />
			) : (
				<CircleDashed className='text-zinc-400 size-5 shrink-0' />
			)}
			<span className='text-zinc-100'>{title}</span>
			<span className='text-zinc-400 text-sm ml-auto'>{time}</span>
		</div>
	);
};

export default ActivityItem;
