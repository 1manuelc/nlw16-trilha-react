import { MapPin, Calendar, Settings2, ArrowRight } from 'lucide-react';
import Button from '../../../components/button';
import InvisibleInput from '../../../components/invisible-input';
import VerticalSeparator from '../../../components/vertical-separator';
// import { useState } from 'react';

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
	// const [isDayPickerOpen, setIsDayPickerOpen] = useState<boolean>(false);

	// function openDayPicker() {
	// 	setIsDayPickerOpen(true);
	// }

	// function closeDayPicker() {
	// 	setIsDayPickerOpen(false);
	// }

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

			<button
				// disabled={isDayPickerOpen}
				className='flex items-center gap-2 text-left w-40'
			>
				<Calendar className='size-5 text-zinc-400' />
				<span className='text-lg text-zinc-400'>Quando?</span>
			</button>

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
