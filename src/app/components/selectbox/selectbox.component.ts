import { Component, OnInit, HostBinding, Output, EventEmitter, Input } from '@angular/core';
import { SelectboxOption } from '../../interfaces/selectbox-option';

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html'
})
export class SelectboxComponent implements OnInit {
  @HostBinding('class') class = 'c-selectbox';
  @Output() changeEvent: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class.c-selectbox--disabled') @Input() isDisabled = false;

  @HostBinding('class.c-selectbox--lg') @Input() isLg = false;

  @Input() value: any;
  @Input() options: SelectboxOption[];


  constructor() { }

  ngOnInit() {
    if (!this.options) return;
    if (!this.value) this.value = this.options[0].value;
  }

  changeHandler($event) {
    this.changeEvent.emit(this.value);
  }

}
