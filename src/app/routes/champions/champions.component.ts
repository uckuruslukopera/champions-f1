import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ErgastService } from '../../services/ergast.service';
import { Race } from '../../interfaces/race';
import { Result } from '../../interfaces/result';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html'
})
export class ChampionsComponent implements OnInit {
  @HostBinding('class.r-champions') true;
  races: Race[];
  raceCount: number;
  raceCurrentPage: number;
  resultCount: number;
  resultCurrentPage: number;
  raceResults: Result[];
  selectedYear: number;
  selectedRound: number;

  pageSize = 10;

  constructor(
    private route: ActivatedRoute,
    private ergastService: ErgastService
  ) { }

  ngOnInit() {

    this.ergastService.races$.subscribe(response => {
      if (response && response['RaceTable'] && response['RaceTable']['Races']) {
        this.races = response['RaceTable']['Races'];
        this.raceCount = Number(response['total']);
        this.raceCurrentPage = (Number(response['offset']) / this.pageSize) + 1;
        this.raceResults = [];
      }
    });

    this.ergastService.results$.subscribe(response => {
      if (response && response['RaceTable']
                   && response['RaceTable']['Races']
                   && response['RaceTable']['Races'].length
                   && response['RaceTable']['Races'][0]
                   && response['RaceTable']['Races'][0]['Results']
                   && response['RaceTable']['Races'][0]['Results'].length) {
        this.raceResults = response['RaceTable']['Races'][0]['Results'];
        this.resultCount = Number(response['total']);
        this.resultCurrentPage = (Number(response['offset']) / this.pageSize) + 1;
      }
    });

    this.route.params.subscribe(params => {
      this.selectedYear = +params['year'];
      if (!this.selectedYear) return;
      this.ergastService.getSelectedYearsRaces(this.selectedYear, this.pageSize);
    });
  }

  racePageSelected(e) {
    this.raceCurrentPage = e;
    this.ergastService.getSelectedYearsRaces(this.selectedYear, this.pageSize, ((e - 1) * this.pageSize));
  }

  resultPageSelected(e) {
    this.resultCurrentPage = e;
    this.ergastService.getSelectedRacesResults(this.selectedYear, this.selectedRound, this.pageSize, ((e - 1) * this.pageSize));
  }

  getRaceResults(race: Race) {
    if (!race) return;
    this.selectedRound = +race.round;
    this.ergastService.getSelectedRacesResults(this.selectedYear, this.selectedRound, this.pageSize);
  }
}
