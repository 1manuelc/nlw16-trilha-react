import { MapPin, Calendar, Settings2, ArrowRight } from 'lucide-react';
import Button from '../../../components/button';
import InvisibleInput from '../../../components/invisible-input';
import VerticalSeparator from '../../../components/vertical-separator';

interface DestinationAndDateStepProps {
	isGuestsInputOpen: boolean;
	closeGuestsInput: () => void;
	openGuestsInput: () => void;
}

const DestinationAndDateStep: React.FC<DestinationAndDateStepProps> = ({
	isGuestsInputOpen,
	closeGuestsInput,
	openGuestsInput,
}) => {
	return (
		<div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3'>
			<InvisibleInput
				disabled={isGuestsInputOpen}
				type='text'
				placeholder='Para onde você vai?'
				width_variant='full'
			>
				<MapPin className='size-5 text-zinc-400' />
			</InvisibleInput>

			<InvisibleInput
				disabled={isGuestsInputOpen}
				type='text'
				placeholder='Quando você vai?'
				className='w-40 bg-transparent outline-none'
			>
				<Calendar className='size-5 text-zinc-400' />
			</InvisibleInput>

			<VerticalSeparator />

			{isGuestsInputOpen ? (
				<Button onClick={closeGuestsInput} variant='secondary'>
					Alterar local/data
					<Settings2 className='size-5' />
				</Button>
			) : (
				<Button onClick={openGuestsInput} variant='primary'>
					<ArrowRight className='size-5' />
					Continuar
				</Button>
			)}
		</div>
	);
};

export default DestinationAndDateStep;
