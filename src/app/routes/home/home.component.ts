import { Component, OnInit, HostBinding } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Router } from '../../../../node_modules/@angular/router';
import { SelectboxOption } from '../../interfaces/selectbox-option';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  @HostBinding('class.r-home') true;
  yearOptions: SelectboxOption[];

  constructor(
    private configService: ConfigService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.yearOptions = this.configService.getYearOptions();
  }

  onYearSelected(e) {
    console.log(e);
    this.router.navigate(['/champions', e]);
  }

}
