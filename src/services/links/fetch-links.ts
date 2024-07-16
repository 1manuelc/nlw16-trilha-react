import { ILink } from '../../interfaces/link';
import { api } from '../../lib/axios';

interface IFetchLinks {
	tripId: string | undefined;
	setLinks: (data: ILink[]) => void;
}

export async function fetchLinks({ tripId, setLinks }: IFetchLinks) {
	const response = await api.get(`/trips/${tripId}/links`);
	const data = response?.data.links;
	setLinks(data);
}
