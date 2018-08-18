import { RaceTable } from './race-table';

export interface RaceResponse {
    RaceTable: RaceTable;
    limit: string;
    offset: string;
    total: string;
}
