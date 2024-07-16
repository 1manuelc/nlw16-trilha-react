import { CircleCheck, CircleDashed, Link2 } from 'lucide-react';
import Button from '../../../components/button';

interface ParticipantItemProps {
	id: string;
	name: string;
	email: string;
	isConfirmed?: boolean;
}

const ParticipantItem: React.FC<ParticipantItemProps> = ({
	id,
	name,
	email,
	isConfirmed = false,
}) => {
	function handleCopyToClipboard() {
		navigator.clipboard
			.writeText(`http://localhost:3333/participants/${id}/confirm`)
			.then(() =>
				alert(
					`Link para confirmação na viagem copiado!\nCompartilhe com ${name}!`
				)
			);
	}

	return (
		<div className='flex items-center justify-between gap-4'>
			<div className='space-y-1.5'>
				<span className='block font-medium text-zinc-100'>{name}</span>
				<span className='block text-sm text-zinc-400 truncate'>{email}</span>
			</div>
			{isConfirmed ? (
				<CircleCheck className='size-5 text-lime-300' />
			) : (
				<div className='flex shrink-0 gap-4 items-center'>
					<Button onClick={handleCopyToClipboard} variant='secondary'>
						<Link2 className='size-5' />
					</Button>
					<CircleDashed className='text-zinc-400 size-5' />
				</div>
			)}{' '}
		</div>
	);
};

export default ParticipantItem;
