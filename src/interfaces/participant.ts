export interface Participant {
	id: string;
	name: string | null;
	email: string;
	is_confirmed: boolean;
	is_owner: boolean;
	trip_id: string;
}
