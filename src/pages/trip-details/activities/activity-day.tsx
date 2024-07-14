import { ReactNode } from 'react';

interface ActivityDayProps {
	children?: ReactNode;
	dayNumber: number;
	dayOfWeek: string;
}

const ActivityDay: React.FC<ActivityDayProps> = ({
	children,
	dayNumber,
	dayOfWeek,
}) => {
	return (
		<div className='space-y-2.5'>
			<div className='flex gap-2 items-baseline'>
				<span className='text-xl font-semibold text-zinc-300'>
					Dia {dayNumber}
				</span>
				<span className='text-xs text-zinc-500'>{dayOfWeek}</span>
			</div>

			{children ? (
				children
			) : (
				<p className='text-zinc-500 text-sm'>
					Nenhuma atividade cadastrada nessa data
				</p>
			)}
		</div>
	);
};

export default ActivityDay;
