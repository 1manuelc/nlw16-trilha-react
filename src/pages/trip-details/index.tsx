interface TripDetailsPageProps {}
import { Plus } from 'lucide-react';
import { useState } from 'react';
import CreateActivityModal from './activities/create-activity-modal';
import ImportantLinks from './links/important-links';
import Guests from './guests/guests';
import Activities from './activities/activities';
import DestinationAndDateHeader from './destination-and-date-header';
import Button from '../../components/button';
import HorizontalSeparator from '../../components/horizontal-separator';

const TripDetailsPage: React.FC<TripDetailsPageProps> = () => {
	const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
		useState<boolean>(false);

	function openCreateActivityModal() {
		setIsCreateActivityModalOpen(true);
	}

	function closeCreateActivityModal() {
		setIsCreateActivityModalOpen(false);
	}

	return (
		<div className='max-w-6xl px-6 py-10 mx-auto space-y-8'>
			<DestinationAndDateHeader />

			<main className='flex gap-16 px-6'>
				<div className='flex-1 space-y-6'>
					<div className='flex items-center justify-between'>
						<h2 className='text-3xl font-semibold'>Atividades</h2>
						<Button onClick={openCreateActivityModal} variant='primary'>
							<Plus className='size-5' />
							Cadastrar atividade
						</Button>
					</div>

					<Activities />
				</div>

				<div className='w-80 space-y-6'>
					<ImportantLinks />
					<HorizontalSeparator />
					<Guests />
				</div>
			</main>

			{isCreateActivityModalOpen && (
				<CreateActivityModal
					closeCreateActivityModal={closeCreateActivityModal}
				/>
			)}
		</div>
	);
};

export { TripDetailsPage };
