import { MapPin, Calendar, Settings2, ArrowRight } from 'lucide-react';
import Button from '../../../components/button';
import InvisibleInput from '../../../components/invisible-input';
import VerticalSeparator from '../../../components/vertical-separator';
import { useState } from 'react';
import Modal from '../../../components/modal';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

interface DestinationAndDateStepProps {
	isGuestsInputOpen: boolean;
	closeGuestsInput: () => void;
	openGuestsInput: () => void;
	setDestination: (destination: string) => void;
	eventStartAndEndDates: DateRange | undefined;
	setEventStartAndEndDates: (dates: DateRange | undefined) => void;
}

const DestinationAndDateStep: React.FC<DestinationAndDateStepProps> = ({
	isGuestsInputOpen,
	closeGuestsInput,
	openGuestsInput,
	setDestination,
	setEventStartAndEndDates,
	eventStartAndEndDates,
}) => {
	const [isDayPickerModalOpen, setIsDayPickerModalOpen] =
		useState<boolean>(false);

	const displayedDate =
		eventStartAndEndDates &&
		eventStartAndEndDates.from &&
		eventStartAndEndDates.to
			? format(eventStartAndEndDates.from, "d' de 'LLL")
					.concat(' até ')
					.concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
			: null;

	function openDayPickerModal() {
		setIsDayPickerModalOpen(true);
	}

	function closeDayPickerModal() {
		setIsDayPickerModalOpen(false);
	}

	return (
		<div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3'>
			<InvisibleInput
				disabled={isGuestsInputOpen}
				type='text'
				placeholder='Para onde você vai?'
				width_variant='full'
				onChange={(event) => setDestination(event.target.value)}
			>
				<MapPin className='size-5 text-zinc-400' />
			</InvisibleInput>

			<button
				disabled={isGuestsInputOpen}
				onClick={openDayPickerModal}
				className='flex items-center gap-2 text-left w-[240px]'
			>
				<Calendar className='size-5 text-zinc-400' />
				<span className='text-lg text-zinc-400 flex-1'>
					{displayedDate || 'Quando?'}
				</span>
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

			{isDayPickerModalOpen && (
				<Modal
					title='Selecione a data'
					closeModalFn={closeDayPickerModal}
					size='small'
				>
					<DayPicker
						mode='range'
						selected={eventStartAndEndDates}
						onSelect={setEventStartAndEndDates}
					/>
				</Modal>
			)}
		</div>
	);
};

export default DestinationAndDateStep;
