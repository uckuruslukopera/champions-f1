import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public loadingStatus$: ReplaySubject<boolean> = new ReplaySubject();

  constructor() { }

  showLoading() {
    this.loadingStatus$.next(true);
  }

  hideLoading() {
    this.loadingStatus$.next(false);
  }
}
