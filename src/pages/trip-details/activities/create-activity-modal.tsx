import { X, Tag, Calendar } from 'lucide-react';
import Button from '../../../components/button';
import BoxInput from '../../../components/box-input';

interface CreateActivityModalProps {
	closeCreateActivityModal: () => void;
}

const CreateActivityModal: React.FC<CreateActivityModalProps> = ({
	closeCreateActivityModal,
}) => {
	return (
		<div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
			<div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
				<div className='space-y-2'>
					<div className='flex items-center justify-between'>
						<h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
						<button onClick={closeCreateActivityModal}>
							<X className='size-5 text-zinc-400' />
						</button>
					</div>
					<p className='text-sm text-zinc-400'>
						Todos os convidados podem ver as atividades.
					</p>
				</div>

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
			</div>
		</div>
	);
};

export default CreateActivityModal;
