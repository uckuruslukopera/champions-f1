import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Result } from '../../interfaces/result';
import { ErgastService } from '../../services/ergast.service';
import { Driver } from '../../interfaces/driver';


@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html'
})
export class ResultListComponent implements OnInit {
  
  @HostBinding('class.c-result-list') true;
  @Input() results: Result[];
  worldChampion: Driver;
  championToolTipText: string;
  sub: any;

  constructor(
    private ergastService: ErgastService,
  ) { }

  ngOnInit() {
    let selectedYear: number;
    this.ergastService.worldChampion$.subscribe(response => {
      if (response && response['StandingsTable']
                   && response['StandingsTable']['StandingsLists']
                   && response['StandingsTable']['StandingsLists'].length
                   && response['StandingsTable']['StandingsLists'][0]['DriverStandings']
                   && response['StandingsTable']['StandingsLists'][0]['DriverStandings'].length
                   && response['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]
                   && response['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Driver']) {
        this.worldChampion = response['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Driver'];
      }
    });
    
    this.ergastService.selectedYear$.subscribe(year => {
      selectedYear = year;
      this.championToolTipText = `${selectedYear} world champion`;
      this.ergastService.getSelectedYearsWorldChampion(selectedYear);
    });
  }

  isDriverWorldChampion(driver: Driver) {
    if (driver && this.worldChampion) return this.worldChampion.driverId === driver.driverId;
  }

}
