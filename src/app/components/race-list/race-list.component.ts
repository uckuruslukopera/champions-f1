import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { Race } from '../../interfaces/race';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html'
})
export class RaceListComponent implements OnInit {

  @HostBinding('class.c-race-list') true;
  @Input() races: Race[];
  @Output() raceSelectedEvent: EventEmitter<Race> = new EventEmitter<Race>();

  selectedRace: Race;

  constructor() { }

  ngOnInit() {

  }

  onRaceSelected(race: Race) {
    this.selectedRace = race;
    this.raceSelectedEvent.emit(race);
  }
}
