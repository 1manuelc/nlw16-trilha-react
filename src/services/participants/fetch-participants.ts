import { IParticipant } from '../../interfaces/participant';
import { api } from '../../lib/axios';

interface IFetchParticipants {
	tripId: string | undefined;
	setParticipants: (data: IParticipant[]) => void;
}

export async function fetchParticipants({
	tripId,
	setParticipants,
}: IFetchParticipants) {
	const response = await api.get(`/trips/${tripId}/participants`);
	const data = response?.data.participants;
	setParticipants(data);
}
