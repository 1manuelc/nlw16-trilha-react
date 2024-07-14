import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmTripModal from './confirm-trip-modal';
import DestinationAndDateStep from './destination-and-date-step';
import InviteGuestsModal from './invite-guests-modal';
import InviteGuestsStep from './invite-guests-step';

export function CreateTripPage() {
	const [isGuestsInputOpen, setIsGuestsInputOpen] = useState<boolean>(false);
	const [isGuestsModalOpen, setIsGuestsModalOpen] = useState<boolean>(false);
	const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] =
		useState<boolean>(false);
	const [emailsToInvite, setEmailsToInvite] = useState<Array<string>>([]);
	const navigate = useNavigate();

	function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const data = new FormData(event.currentTarget);
		const email = data.get('email')?.toString();

		if (!email) return;

		if (emailsToInvite.includes(email)) {
			alert(`${email} já convidado.`);
			return;
		}

		setEmailsToInvite([...emailsToInvite, email]);

		event.currentTarget.reset;
	}

	function removeEmailFromInvites(emailToRemove: string) {
		const newEmailList = emailsToInvite.filter(
			(invited) => invited != emailToRemove
		);

		setEmailsToInvite(newEmailList);
	}

	function openGuestsInput() {
		setIsGuestsInputOpen(true);
	}

	function closeGuestsInput() {
		setIsGuestsInputOpen(false);
	}

	function openGuestsModal() {
		setIsGuestsModalOpen(true);
	}

	function closeGuestsModal() {
		setIsGuestsModalOpen(false);
	}

	function openConfirmTripModal() {
		setIsConfirmTripModalOpen(true);
	}

	function closeConfirmTripModal() {
		setIsConfirmTripModalOpen(false);
	}

	function createTrip(event: FormEvent<HTMLFormElement>): void {
		const data = new FormData(event.currentTarget);
		const name = data.get('name')?.toString();
		const email = data.get('email')?.toString();

		console.log(name, email);

		navigate('/trips/123');
	}

	return (
		<div className='h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center'>
			<div className='max-w-3xl w-full px-6 text-center space-y-10'>
				<div className='flex flex-col items-center gap-3'>
					<img src='./logo.svg' alt='plann.er logo' />
					<p className='text-zinc-300 text-lg'>
						Convide seus amigos e planeje sua próxima viagem!
					</p>
				</div>

				<div className='space-y-4'>
					<DestinationAndDateStep
						isGuestsInputOpen={isGuestsInputOpen}
						openGuestsInput={openGuestsInput}
						closeGuestsInput={closeGuestsInput}
					/>

					{isGuestsInputOpen && (
						<InviteGuestsStep
							emailsToInvite={emailsToInvite}
							openConfirmTripModal={openConfirmTripModal}
							openGuestsModal={openGuestsModal}
						/>
					)}
				</div>

				<p className='text-zinc-500 text-sm'>
					Ao planejar sua viagem pela plann.er você automaticamente concorda com
					nossos{' '}
					<a href='#' className='text-zinc-300 underline'>
						termos de uso
					</a>{' '}
					e{' '}
					<a href='#' className='text-zinc-300 underline'>
						políticas de privacidade
					</a>
					.
				</p>
			</div>

			{isGuestsModalOpen && (
				<InviteGuestsModal
					emailsToInvite={emailsToInvite}
					addNewEmailToInvite={addNewEmailToInvite}
					removeEmailFromInvites={removeEmailFromInvites}
					closeGuestsModal={closeGuestsModal}
				/>
			)}

			{isConfirmTripModalOpen && (
				<ConfirmTripModal
					closeConfirmTripModal={closeConfirmTripModal}
					createTrip={createTrip}
				/>
			)}
		</div>
	);
}