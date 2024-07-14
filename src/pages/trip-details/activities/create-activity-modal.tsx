import { Tag, Calendar } from 'lucide-react';
import Button from '../../../components/button';
import BoxInput from '../../../components/box-input';
import Modal from '../../../components/modal';

interface CreateActivityModalProps {
	closeCreateActivityModal: () => void;
}

const CreateActivityModal: React.FC<CreateActivityModalProps> = ({
	closeCreateActivityModal,
}) => {
	return (
		<Modal
			title='Cadastrar atividade'
			description='Todos os convidados podem ver as atividades.'
			closeModalFn={closeCreateActivityModal}
		>
			<form className='space-y-3'>
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
