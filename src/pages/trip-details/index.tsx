interface TripDetailsPageProps {}
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import CreateActivityModal from './activities/create-activity-modal';
import ImportantLinks from './links/important-links';
import Participants from './participants/participants';
import Activities from './activities/activities';
import DestinationAndDateHeader from './destination-and-date-header';
import Button from '../../components/button';
import HorizontalSeparator from '../../components/horizontal-separator';
import { useParams } from 'react-router-dom';
import { fetchActivities } from '../../services/activities/fetch-activities';
import { IActivities } from '../../interfaces/activities';
import { fetchParticipants } from '../../services/participants/fetch-participants';
import { IParticipant } from '../../interfaces/participant';
import { ILink } from '../../interfaces/link';
import { fetchLinks } from '../../services/links/fetch-links';
import CreateLinkModal from './links/create-link-modal';

const TripDetailsPage: React.FC<TripDetailsPageProps> = () => {
	const { tripId } = useParams();
	const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
		useState<boolean>(false);
	const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] =
		useState<boolean>(false);

	function openCreateActivityModal() {
		setIsCreateActivityModalOpen(true);
	}
	function closeCreateActivityModal() {
		setIsCreateActivityModalOpen(false);
	}
	function openCreateLinkModal() {
		setIsCreateLinkModalOpen(true);
	}
	function closeCreateLinkModal() {
		setIsCreateLinkModalOpen(false);
	}

	const [activities, setActivities] = useState<IActivities[]>([]);
	const [links, setLinks] = useState<ILink[]>([]);
	const [participants, setParticipants] = useState<IParticipant[]>([]);

	useEffect(() => {
		fetchActivities({ tripId, setActivities });
		fetchParticipants({ tripId, setParticipants });
		fetchLinks({ tripId, setLinks });
	}, [tripId, isCreateActivityModalOpen, isCreateLinkModalOpen]);

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

					<Activities activitiesData={activities} />
				</div>

				<div className='w-80 space-y-6'>
					<ImportantLinks
						linksData={links}
						openCreateLinkModal={openCreateLinkModal}
					/>
					<HorizontalSeparator />
					<Participants participantsData={participants} />
				</div>
			</main>

			{isCreateActivityModalOpen && (
				<CreateActivityModal
					tripId={tripId}
					closeCreateActivityModal={closeCreateActivityModal}
				/>
			)}

			{isCreateLinkModalOpen && (
				<CreateLinkModal
					tripId={tripId}
					closeCreateLinkModal={closeCreateLinkModal}
				/>
			)}
		</div>
	);
};

export { TripDetailsPage };
