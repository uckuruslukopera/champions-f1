import { Circuit } from './circuit';
import { Result } from './result';

export interface Race {
    Circuit: Circuit;
    Results?: Result[];
    date: string;
    raceName: string;
    round: string;
    season: string;
    time: string;
    url: string;
}
