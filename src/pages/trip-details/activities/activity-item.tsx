import { CircleCheck } from 'lucide-react';
import { CircleDashed } from 'lucide-react';
import { useEffect, useState } from 'react';
import { updateActivityStatus } from '../../../services/activities/update-activity-status';
import Button from '../../../components/button';

interface ActivityItemProps {
	activityId: string;
	title: string;
	time: string;
	isDone: boolean;
}

// TODO: feature: isDone dynamic marking
// TODO: feature: remove activity
// TODO: feature: edit activity
// TODO: feature: manage activities modal

const ActivityItem: React.FC<ActivityItemProps> = ({
	activityId,
	title,
	time,
	isDone,
}) => {
	const [actualStatus, setActualStatus] = useState<boolean>(isDone);
	useEffect(() => console.log(actualStatus), [actualStatus]);

	function handleActualStatusChange() {
		updateActivityStatus({ activityId, actualStatus, setActualStatus });
	}

	return (
		<div className='transition-all px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3'>
			<Button onClick={handleActualStatusChange} variant='invisible' size='fit'>
				{actualStatus ? (
					<CircleCheck className='size-5 text-lime-300' />
				) : (
					<CircleDashed className='text-zinc-400 size-5' />
				)}
			</Button>
			{actualStatus ? (
				<>
					<span className='line-through text-zinc-600'>{title}</span>
					<span className='line-through text-zinc-600 text-sm ml-auto'>
						{time}
					</span>
				</>
			) : (
				<>
					<span className='text-zinc-100'>{title}</span>
					<span className='text-zinc-400 text-sm ml-auto'>{time}</span>
				</>
			)}
		</div>
	);
};

export default ActivityItem;
