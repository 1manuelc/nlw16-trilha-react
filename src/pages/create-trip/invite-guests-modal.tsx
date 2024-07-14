import { X, AtSign, Plus } from 'lucide-react';
import { FormEvent } from 'react';
import Button from '../../components/button';
import Modal from '../../components/modal';

interface InviteGuestsModalProps {
	emailsToInvite: string[];
	closeGuestsModal: () => void;
	addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
	removeEmailFromInvites: (emailToRemove: string) => void;
}

const InviteGuestsModal: React.FC<InviteGuestsModalProps> = ({
	emailsToInvite,
	addNewEmailToInvite,
	removeEmailFromInvites,
	closeGuestsModal,
}) => {
	return (
		<div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
			<Modal
				title='Selecionar convidados'
				description={
					<>
						Os convidados irão receber e-mails para confirmar a participação na
						viagem.
					</>
				}
				closeModalFn={closeGuestsModal}
			>
				<div className='flex flex-wrap gap-2'>
					{emailsToInvite.map((email) => {
						return (
							<div
								key={email}
								className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'
							>
								<span className='text-zinc-300'>{email}</span>
								<button
									onClick={() => removeEmailFromInvites(email)}
									type='button'
								>
									<X className='size-4 text-zinc-400' />
								</button>
							</div>
						);
					})}
				</div>

				<div className='w-full h-px bg-zinc-800'></div>

				<form
					onSubmit={addNewEmailToInvite}
					className='p-2.5 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'
				>
					<div className='px-2 flex items-center flex-1 gap-2'>
						<AtSign className='text-zinc-400 size-5' />
						<input
							type='email'
							name='email'
							placeholder='Digite o e-mail do convidado'
							className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
						/>
					</div>

					<Button type='submit' variant='primary'>
						Convidar
						<Plus className='size-5' />
					</Button>
				</form>
			</Modal>
		</div>
	);
};

export default InviteGuestsModal;
