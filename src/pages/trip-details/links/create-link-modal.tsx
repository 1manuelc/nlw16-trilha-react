import { Link2, Tag } from 'lucide-react';
import BoxInput from '../../../components/box-input';
import Modal from '../../../components/modal';
import { createLink } from '../../../services/links/create-link';
import Button from '../../../components/button';

interface CreateLinkModalProps {
	closeCreateLinkModal: () => void;
	tripId: string | undefined;
}

const CreateLinkModal: React.FC<CreateLinkModalProps> = ({
	tripId,
	closeCreateLinkModal,
}) => {
	return (
		<Modal
			title='Crie um link'
			description='Este link ficará visível para todos os convidados'
			closeModalFn={closeCreateLinkModal}
		>
			<form
				onSubmit={(event) =>
					createLink({ tripId, event, closeCreateLinkModal })
				}
				className='space-y-3'
			>
				<BoxInput type='text' name='title' placeholder='Dê um nome ao seu link'>
					<Tag className='text-zinc-400 size-5' />
				</BoxInput>

				<BoxInput type='url' name='url' placeholder='Cole aqui a URL'>
					<Link2 className='text-zinc-400 size-5' />
				</BoxInput>

				<Button type='submit' variant='primary' size='full'>
					Salvar link
				</Button>
			</form>
		</Modal>
	);
};

export default CreateLinkModal;
