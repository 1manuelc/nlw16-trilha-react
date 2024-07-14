import ActivityItem from './activity-item';
import ActivityDay from './activity-day';

interface ActivitiesProps {}

const Activities: React.FC<ActivitiesProps> = () => {
	return (
		<div className='space-y-8'>
			<ActivityDay dayNumber={17} dayOfWeek='Sábado'></ActivityDay>
			<ActivityDay dayNumber={18} dayOfWeek='Domingo'>
				<ActivityItem
					title='Academia em grupo'
					time='08:00h'
					isDone={true}
					key={1}
				/>
			</ActivityDay>

			<ActivityDay dayNumber={19} dayOfWeek='Segunda'>
				<ActivityItem
					title='Ida para a piscina'
					time='16:00h'
					isDone={false}
					key={2}
				/>
				<ActivityItem
					title='Jantar em família'
					time='20:00h'
					isDone={false}
					key={3}
				/>
			</ActivityDay>
		</div>
	);
};

export default Activities;
