import { Guest } from '../entities/Guest.model'

export interface GuestRepository {
    get(filters: unknown): Promise<Guest[]>;
}
