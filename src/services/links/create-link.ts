import { FormEvent } from 'react';
import { api } from '../../lib/axios';

export interface ICreateLink {
	tripId: string | undefined;
	event: FormEvent<HTMLFormElement>;
	closeCreateLinkModal: () => void;
}

export async function createLink({
	tripId,
	event,
	closeCreateLinkModal,
}: ICreateLink) {
	event.preventDefault();

	const data = new FormData(event.currentTarget);
	const title = data.get('title')?.toString();
	const url = data.get('url')?.toString();

	api.post(`/trips/${tripId}/links`, {
		title,
		url,
	});

	closeCreateLinkModal();
}
