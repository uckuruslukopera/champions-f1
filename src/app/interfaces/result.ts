import { Driver } from './driver';
import { Constructor } from './costructor';
import { FastestLap } from './fastest-lap';

export interface Result {
    number: string;
    position: string;
    Driver: Driver;
    Constructor: Constructor;
    FastestLap: FastestLap;
    status: string;
}
