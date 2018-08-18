import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { ConfigService } from '../../services/config.service';
import { SelectboxOption } from '../../interfaces/selectbox-option';
import { ErgastService } from '../../services/ergast.service';

import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.c-header') true;
  @HostBinding('class.c-header--with-select') notHomepage = false;

  yearOptions: SelectboxOption[] = [];
  selectedYear: number;
  
  constructor(
    private configService: ConfigService,
    private ergastService: ErgastService,
    private router: Router
  ) { }

  ngOnInit() {

    this.yearOptions = this.configService.getYearOptions();
    this.ergastService.selectedYear$.subscribe(year => {
      if (year > 0) {
        this.selectedYear = year;
      }
    });

    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
                     .subscribe(e => {
                       this.notHomepage = e['url'].includes('/champions');
                      });
  }

  onYearSelected(e) {
    if (e) {
      this.router.navigate(['/champions', e]);
    }
  }
}
