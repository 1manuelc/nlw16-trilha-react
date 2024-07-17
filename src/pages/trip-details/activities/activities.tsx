import ActivityDay from './activity-day';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import ActivityItem from './activity-item';
import { IActivities } from '../../../interfaces/activities';

interface ActivitiesProps {
	activitiesData: IActivities[];
}

const Activities: React.FC<ActivitiesProps> = ({ activitiesData }) => {
	return (
		<div className='space-y-8'>
			{activitiesData?.map((day) => {
				return (
					<ActivityDay
						key={day.date}
						dayNumber={Number(format(day.date, 'd'))}
						dayOfWeek={format(day.date, 'EEEE', {
							locale: ptBR,
						})}
					>
						{day.activities.length
							? day.activities.map((activity) => (
									<ActivityItem
										key={activity.id}
										activityId={activity.id}
										title={activity.title}
										isDone={activity.is_done}
										time={`${format(activity.occurs_at, 'HH:mm')}h`}
									/>
							  ))
							: undefined}
					</ActivityDay>
				);
			})}
		</div>
	);
};

export default Activities;
