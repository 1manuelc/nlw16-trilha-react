import { UserCog } from 'lucide-react';
import Button from '../../../components/button';
import { ReactNode, useEffect, useState } from 'react';
import GuestItem from '../guests/guest-item';
import { useParams } from 'react-router-dom';
import { api } from '../../../lib/axios';
import { IParticipant } from '../../../interfaces/participant';

interface GuestsProps {
	children?: ReactNode;
}

const Guests: React.FC<GuestsProps> = () => {
	const [participants, setParticipants] = useState<IParticipant[]>([]);
	const { tripId } = useParams();

	useEffect(() => {
		api
			.get(`/trips/${tripId}/participants`)
			.then((response) => setParticipants(response?.data.participants));
	}, [tripId]);

	return (
		<div>
			<div className='space-y-6'>
				<h2 className='font-semibold text-xl'>Convidados</h2>

				<div className='space-y-5'>
					{participants.map((participant, index) => {
						return (
							<GuestItem
								key={participant.id}
								name={participant.name || `Convidado ${index}`}
								email={participant.email}
								isConfirmed={participant.is_confirmed}
							/>
						);
					})}
				</div>

				<Button variant='secondary' size='full'>
					<UserCog className='size-5' />
					Gerenciar convidados
				</Button>
			</div>
		</div>
	);
};

export default Guests;
