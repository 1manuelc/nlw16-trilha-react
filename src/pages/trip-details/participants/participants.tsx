import { UserCog } from 'lucide-react';
import Button from '../../../components/button';
import { ReactNode } from 'react';
import ParticipantItem from './participant-item';
import { IParticipant } from '../../../interfaces/participant';

interface ParticipantsProps {
	children?: ReactNode;
	participantsData: IParticipant[];
}

const Participants: React.FC<ParticipantsProps> = ({ participantsData }) => {
	return (
		<div>
			<div className='space-y-6'>
				<h2 className='font-semibold text-xl'>Convidados</h2>

				<div className='space-y-5'>
					{participantsData.map((participant, index) => {
						return (
							<ParticipantItem
								key={participant.id}
								id={participant.id}
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

export default Participants;
