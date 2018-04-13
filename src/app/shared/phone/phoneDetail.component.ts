import { HostListener } from '@angular/core';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PhoneModel } from '../../models/phone.model';

@Component({
    selector: 'phone-detail',
    templateUrl: './phoneDetail.component.html',
    styleUrls: ['./phoneDetail.component.scss']
})
export class PhoneDetailComponent {
  @Input() item: PhoneModel;
}
