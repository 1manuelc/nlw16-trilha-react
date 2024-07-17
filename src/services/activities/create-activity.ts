import { FormEvent } from 'react';
import { api } from '../../lib/axios';

export interface ICreateActivity {
	tripId: string | undefined;
	event: FormEvent<HTMLFormElement>;
	closeCreateActivityModal: () => void;
}

export async function createActivity({
	tripId,
	event,
	closeCreateActivityModal,
}: ICreateActivity) {
	event.preventDefault();

	const data = new FormData(event.currentTarget);
	const title = data.get('title')?.toString();
	const occurs_at = data.get('occurs_at')?.toString();

	await api.post(`/trips/${tripId}/activities`, {
		title,
		occurs_at,
	});

	closeCreateActivityModal();
}
