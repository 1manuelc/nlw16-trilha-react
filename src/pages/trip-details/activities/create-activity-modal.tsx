import { Tag, Calendar } from 'lucide-react';
import Button from '../../../components/button';
import BoxInput from '../../../components/box-input';
import Modal from '../../../components/modal';
import { FormEvent } from 'react';
import { api } from '../../../lib/axios';
import { useParams } from 'react-router-dom';

interface CreateActivityModalProps {
	closeCreateActivityModal: () => void;
}

const CreateActivityModal: React.FC<CreateActivityModalProps> = ({
	closeCreateActivityModal,
}) => {
	const { tripId } = useParams();

	async function createActivity(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const data = new FormData(event.currentTarget);
		const title = data.get('title')?.toString();
		const occurs_at = data.get('occurs_at')?.toString();

		api.post(`/trips/${tripId}/activities`, {
			title,
			occurs_at,
		});

		closeCreateActivityModal();
	}

	return (
		<Modal
			title='Cadastrar atividade'
			description='Todos os convidados podem ver as atividades.'
			closeModalFn={closeCreateActivityModal}
		>
			<form onSubmit={createActivity} className='space-y-3'>
				<BoxInput type='text' name='title' placeholder='Qual atividade?'>
					<Tag className='text-zinc-400 size-5' />
				</BoxInput>

				<BoxInput
					type='datetime-local'
					name='occurs_at'
					placeholder='Data e horário da atividade'
				>
					<Calendar className='text-zinc-400 size-5' />
				</BoxInput>

				<Button type='submit' variant='primary' size='full'>
					Salvar atividade
				</Button>
			</form>
		</Modal>
	);
};

export default CreateActivityModal;
