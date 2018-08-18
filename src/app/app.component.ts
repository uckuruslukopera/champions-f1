import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { ErgastService } from './services/ergast.service';
import { Race } from './interfaces/race';
import { Result } from './interfaces/result';
import { Driver } from './interfaces/driver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  isLoading = false;
  races: Race[];
  raceCount: number;
  results: Result[];
  worldChampion: Driver;

  constructor(
    private loadingService: LoadingService,
    private ergastService: ErgastService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadingService.loadingStatus$.subscribe(status => {
      this.isLoading = status;
      this.changeDetector.detectChanges();
    });
  }

}
