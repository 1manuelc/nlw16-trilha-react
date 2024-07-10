import {
	MapPin,
	Calendar,
	ArrowRight,
	UserRoundPlus,
	Settings2,
	X,
	AtSign,
	Plus,
} from 'lucide-react';
import { FormEvent, useState } from 'react';

export function App() {
	const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
	const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
	const [emailsToInvite, setEmailsToInvite] = useState<Array<string>>([]);

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
					<div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3'>
						<div className='flex items-center gap-2 flex-1'>
							<MapPin className='size-5 text-zinc-400' />
							<input
								disabled={isGuestsInputOpen}
								type='text'
								placeholder='Para onde você vai?'
								className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
							/>
						</div>

						<div className='flex items-center gap-2'>
							<Calendar className='size-5 text-zinc-400' />
							<input
								disabled={isGuestsInputOpen}
								type='text'
								placeholder='Quando você vai?'
								className='bg-transparent text-lg placeholder-zinc-400 w-40 outline-none'
							/>
						</div>

						<div className='w-px h-6 bg-zinc-800'></div>

						{isGuestsInputOpen ? (
							<button
								onClick={closeGuestsInput}
								className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'
							>
								Alterar local/data
								<Settings2 className='size-5' />
							</button>
						) : (
							<button
								onClick={openGuestsInput}
								className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'
							>
								<ArrowRight className='size-5' />
								Continuar
							</button>
						)}
					</div>

					{isGuestsInputOpen && (
						<div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3'>
							<button
								type='button'
								onClick={openGuestsModal}
								className='flex items-center gap-2 flex-1'
							>
								<UserRoundPlus className='size-5 text-zinc-400' />
								<span className='text-zinc-400 text-lg flex-1 text-left'>
									Quem estará na viagem?
								</span>
							</button>

							<div className='w-px h-6 bg-zinc-800'></div>

							<button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
								<ArrowRight className='size-5' />
								Confirmar viagem
							</button>
						</div>
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
				<div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
					<div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
						<div className='space-y-2'>
							<div className='flex items-center justify-between'>
								<h2 className='text-lg font-semibold'>Selecionar convidados</h2>
								<button onClick={closeGuestsModal}>
									<X className='size-5 text-zinc-400' />
								</button>
							</div>
							<p className='text-sm text-zinc-400'>
								Os convidados irão receber e-mails para confirmar a participação
								na viagem.
							</p>
						</div>

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

							<button
								type='submit'
								className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'
							>
								Convidar
								<Plus className='size-5' />
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
