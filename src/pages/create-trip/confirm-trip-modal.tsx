import { User, Mail } from 'lucide-react';
import { FormEvent } from 'react';
import Button from '../../components/button';
import BoxInput from '../../components/box-input';
import Modal from '../../components/modal';

interface ConfirmTripModalProps {
	closeConfirmTripModal: () => void;
	createTrip: (event: FormEvent<HTMLFormElement>) => void;
	setOwnerName: (name: string) => void;
	setOwnerEmail: (email: string) => void;
}

const ConfirmTripModal: React.FC<ConfirmTripModalProps> = ({
	closeConfirmTripModal,
	createTrip,
	setOwnerName,
	setOwnerEmail,
}) => {
	return (
		<Modal
			title='Confirmar criação de viagem'
			description={
				<>
					Para concluir a criação da viagem para{' '}
					<span className='text-zinc-100 font-semibold'>
						{' '}
						Florianópolis, Brasil
					</span>{' '}
					nas datas de{' '}
					<span className='text-zinc-100 font-semibold'>
						16 a 27 de agosto de 2024
					</span>{' '}
					preencha seus dados abaixo:
				</>
			}
			closeModalFn={closeConfirmTripModal}
		>
			<form onSubmit={createTrip} className='space-y-3'>
				<BoxInput
					type='text'
					name='name'
					placeholder='Seu nome completo'
					onChange={(event) => setOwnerName(event.target.value)}
				>
					<User className='text-zinc-400 size-5' />
				</BoxInput>

				<BoxInput
					type='email'
					name='email'
					placeholder='Seu e-mail pessoal'
					onChange={(event) => setOwnerEmail(event.target.value)}
				>
					<Mail className='text-zinc-400 size-5' />
				</BoxInput>

				<Button type='submit' variant='primary' size='full'>
					Confirmar criação da viagem
				</Button>
			</form>
		</Modal>
	);
};

export default ConfirmTripModal;
