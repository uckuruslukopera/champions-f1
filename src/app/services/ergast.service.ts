import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient} from '@angular/common/http';
import { LoadingService } from './loading.service';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { Observable, BehaviorSubject } from '../../../node_modules/rxjs';
import { RaceResponse } from '../interfaces/race-response';
import { Race } from '../interfaces/race';
import { Result } from '../interfaces/result';
import { Driver } from '../interfaces/driver';

@Injectable({
  providedIn: 'root'
})
export class ErgastService {

  serviceUrl: string;
  responseType: string;
  responseKey: string;
  selectedYear$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  races$: BehaviorSubject<RaceResponse> = new BehaviorSubject<RaceResponse>(null);
  results$: BehaviorSubject<RaceResponse> = new BehaviorSubject<RaceResponse>(null);
  worldChampion$: BehaviorSubject<RaceResponse> = new BehaviorSubject<RaceResponse>(null);

  constructor(
    private configService: ConfigService,
    private httpClient: HttpClient,
    private loadingService: LoadingService
  ) {
    this.serviceUrl = this.configService.getConfiguration('api');
    this.responseType = this.configService.getConfiguration('responseType');
    this.responseKey = this.configService.getConfiguration('responseKey');
  }

  getSelectedYearsRaces(year: number, pageSize = 10, offset = 0): Observable<RaceResponse> {
    this.selectedYear$.next(year);
    if (!this.serviceUrl) return;
    const url = this.serviceUrl.concat(`/${year}`);
    this.get(url, {limit: pageSize, offset: offset})
        .subscribe(races => this.races$.next(races));
  }

  getSelectedRacesResults(year: number, round: number, pageSize = 10, offset = 0): Observable<RaceResponse> {
    if (!this.serviceUrl) return;
    const url = this.serviceUrl.concat(`/${year}/${round}/results`);
    this.get(url, {limit: pageSize, offset: offset})
                .subscribe(results => this.results$.next(results));
  }

  getSelectedYearsWorldChampion(year: number, pageSize = 1): Observable<Driver> {
    if (!this.serviceUrl) return;
    const url = this.serviceUrl.concat(`/${year}/driverStandings`);
    this.get(url, {limit: pageSize})
        .subscribe(driver => this.worldChampion$.next(driver));
  }

  // Helpers

  private get(url, queryParams = {}): Observable<any> {
    const urlWithResponseType = url.concat(`.${this.responseType}`);

    this.loadingService.showLoading();

    return this.httpClient.get(urlWithResponseType, {params: queryParams})
                          .pipe(
                            map(response => this.handleResponse(response)),
                            catchError(error => this.handleError(error)),
                            finalize(() => this.loadingService.hideLoading())
                          );
  }

  private handleResponse(response: any) {
    return (this.responseKey && response[this.responseKey]) ? response[this.responseKey] : response;
  }

  private handleError(error: any) {
    console.log(error);
    return error;
  }
}
