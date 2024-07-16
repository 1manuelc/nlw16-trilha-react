import { Tag, Calendar } from 'lucide-react';
import Button from '../../../components/button';
import BoxInput from '../../../components/box-input';
import Modal from '../../../components/modal';
import { createActivity } from '../../../services/activities/create-activity';

interface CreateActivityModalProps {
	closeCreateActivityModal: () => void;
	tripId: string | undefined;
}

const CreateActivityModal: React.FC<CreateActivityModalProps> = ({
	closeCreateActivityModal,
	tripId,
}) => {
	return (
		<Modal
			title='Cadastrar atividade'
			description='Todos os convidados podem ver as atividades.'
			closeModalFn={closeCreateActivityModal}
		>
			<form
				onSubmit={(event) => {
					createActivity({ tripId, event, closeCreateActivityModal });
				}}
				className='space-y-3'
			>
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
