import { MapPin, Calendar, Settings2 } from 'lucide-react';
import Button from '../../components/button';
import VerticalSeparator from '../../components/vertical-separator';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { format } from 'date-fns';
import { ITrip } from '../../interfaces/trip';

const DestinationAndDateHeader: React.FC = () => {
	const [trip, setTrip] = useState<ITrip | undefined>();
	const { tripId } = useParams();

	useEffect(() => {
		api.get(`/trips/${tripId}`).then((response) => setTrip(response.data.trip));
	}, [tripId]);

	const displayedDate =
		trip && trip.starts_at && trip.ends_at
			? format(trip.starts_at, "d' de 'LLL")
					.concat(' até ')
					.concat(format(trip.ends_at, "d' de 'LLL"))
			: null;

	return (
		<div className='px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between'>
			<div className='text-zinc-100 flex items-center gap-2'>
				<MapPin className='size-5 text-zinc-400' />
				<span>{trip?.destination}</span>
			</div>

			<div className='flex items-center gap-5'>
				<div className='text-zinc-100 flex items-center gap-2'>
					<Calendar className='size-5 text-zinc-400' />
					<span>{displayedDate}</span>
				</div>

				<VerticalSeparator />

				<Button variant='secondary'>
					Alterar local/data
					<Settings2 className='size-5' />
				</Button>
			</div>
		</div>
	);
};

export default DestinationAndDateHeader;
