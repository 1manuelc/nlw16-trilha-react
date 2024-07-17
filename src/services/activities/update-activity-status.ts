import { api } from '../../lib/axios';

interface IUpdateActivityStatus {
	activityId: string;
	actualStatus: boolean;
	setActualStatus: (newStatus: boolean) => void;
}

export async function updateActivityStatus({
	activityId,
	actualStatus,
	setActualStatus,
}: IUpdateActivityStatus) {
	await api.put(`/activities/${activityId}`, {
		is_done: !actualStatus,
	});
	setActualStatus(!actualStatus);
}
