import { Plus } from 'lucide-react';
import Button from '../../../components/button';
import LinkItem from './link-item';

interface ImportantLinksProps {}

const ImportantLinks: React.FC<ImportantLinksProps> = () => {
	return (
		<div className='space-y-6'>
			<h2 className='font-semibold text-xl'>Links importantes</h2>

			<div className='space-y-5'>
				<LinkItem
					title='Reserva do AirBnb'
					url='https://airbnb.com.br/rooms/1ndkjsankdsandni1u2390u3091u923u091u3ujidshudgaid7468173617jcsabi'
				/>
				<LinkItem
					title='Playlist da Viagem'
					url='https://spotify.com/1manuelc'
				/>
			</div>

			<Button variant='secondary' size='full'>
				<Plus className='size-5' />
				Cadastrar novo link
			</Button>
		</div>
	);
};

export default ImportantLinks;
