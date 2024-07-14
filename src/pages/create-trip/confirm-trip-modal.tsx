import { X, User, Mail } from 'lucide-react';
import { FormEvent } from 'react';
import Button from '../../components/button';
import BoxInput from '../../components/box-input';

interface ConfirmTripModalProps {
	closeConfirmTripModal: () => void;
	createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

const ConfirmTripModal: React.FC<ConfirmTripModalProps> = ({
	closeConfirmTripModal,
	createTrip,
}) => {
	return (
		<div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
			<div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
				<div className='space-y-2'>
					<div className='flex items-center justify-between'>
						<h2 className='text-lg font-semibold'>
							Confirmar criação de viagem
						</h2>
						<button onClick={closeConfirmTripModal}>
							<X className='size-5 text-zinc-400' />
						</button>
					</div>
					<p className='text-sm text-zinc-400'>
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
					</p>
				</div>

				<form onSubmit={createTrip} className='space-y-3'>
					<BoxInput type='text' name='name' placeholder='Seu nome completo'>
						<User className='text-zinc-400 size-5' />
					</BoxInput>

					<BoxInput type='email' name='email' placeholder='Seu e-mail pessoal'>
						<Mail className='text-zinc-400 size-5' />
					</BoxInput>

					<Button type='submit' variant='primary' size='full'>
						Confirmar criação da viagem
					</Button>
				</form>
			</div>
		</div>
	);
};

export default ConfirmTripModal;
