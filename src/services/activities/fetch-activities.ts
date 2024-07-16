import { IActivities } from '../../interfaces/activities';
import { api } from '../../lib/axios';

export interface IFetchActivities {
	tripId: string | undefined;
	setActivities: (data: IActivities[]) => void;
}

export async function fetchActivities({
	tripId,
	setActivities,
}: IFetchActivities) {
	const response = await api.get(`/trips/${tripId}/activities`);
	const data = response.data.activities;
	setActivities(data);
}
