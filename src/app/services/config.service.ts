import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getConfiguration(key: string): any {
    if (key) {
      return environment[key];
    }
  }

  getYearOptions() {
    const years = this.calculateAvailableYears();
    let yearOptions = years.map((y) => {
      return {value: y, text: y.toString(), disabled: false };
    });
    yearOptions = [{value: -1, text: 'Select a year', disabled: true}, ...yearOptions];
    return yearOptions;
  }

  // Helpers

  private calculateAvailableYears() {
    const yearRange = this.getConfiguration('yearRange');
    const years = [];
    if (yearRange) {
      const {startYear, endYear} = yearRange;
      for (let i = startYear; i <= endYear; i++) {
        years.push(i);
      }
    }
    return years;
  }
}
