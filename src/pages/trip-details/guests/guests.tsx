import { UserCog } from 'lucide-react';
import Button from '../../../components/button';
import { ReactNode } from 'react';
import GuestItem from '../guests/guest-item';

interface GuestsProps {
	children?: ReactNode;
}

const Guests: React.FC<GuestsProps> = () => {
	return (
		<div>
			<div className='space-y-6'>
				<h2 className='font-semibold text-xl'>Convidados</h2>

				<div className='space-y-5'>
					<GuestItem
						name='Jessica White'
						email='jes@white.com'
						isConfirmed={true}
					/>

					<GuestItem name='John Doe' email='john@doe.com' isConfirmed={false} />
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
