import { Component, OnInit } from '@angular/core';
import { PhoneModel } from './../../models/phone.model';
import { RestPhoneService } from '../../services/restPhone.service';


@Component({
    selector: 'phone-list-container',
    templateUrl: './phoneListContainer.component.html',
    styleUrls: ['./phoneListContainer.component.scss']
})
export class PhoneListContainer implements OnInit {
    listOfPhones: PhoneModel[];
    loading: Boolean = true;
  //   listOfPhones: PhoneModel[] = [
  //   {
  //     id: 0,
  //     title: 'Iphone Xs',
  //     image: 'https://i-cdn.phonearena.com/images/phones/70463-xlarge/Apple-iPhone-Xs-0.jpg',
  //     description: 'The successor to the iPhone X is rumored to retain the glass-on-metal construction, the 5.8-inch OLED display...',
  //     color: 'black',
  //     price: '800€'
  //   },
  //   {
  //     id: 1,
  //     title: 'Samsung Galaxy S9',
  //     image: 'https://i-cdn.phonearena.com/images/phones/71479-xlarge/Samsung-Galaxy-Note-9-0.jpg',
  //     description: 'According to rumors, we could be a few months away from the launch of the next Samsung Galaxy Note smartphone...',
  //     color: 'silver',
  //     price: '700€'
  //   },
  //   {
  //     id: 3,
  //     title: 'Motoriola G5S',
  //     image: 'https://i-cdn.phonearena.com/images/phones/71039-xlarge/Motorola-Moto-G5S-0.jpg',
  //     description: 'The Moto G5S sports a 5.2-inch 1080p display (instead of the 5-inch 1080p screen of the regular G5), and ...',
  //     color: 'blue',
  //     price: '500'
  //   },
  //   {
  //     id: 0,
  //     title: 'Iphone Xs',
  //     image: 'https://i-cdn.phonearena.com/images/phones/70463-xlarge/Apple-iPhone-Xs-0.jpg',
  //     description: 'The successor to the iPhone X is rumored to retain the glass-on-metal construction, the 5.8-inch OLED display...',
  //     color: 'black',
  //     price: '800€'
  //   },
  //   {
  //     id: 1,
  //     title: 'Samsung Galaxy S9',
  //     image: 'https://i-cdn.phonearena.com/images/phones/71479-xlarge/Samsung-Galaxy-Note-9-0.jpg',
  //     description: 'According to rumors, we could be a few months away from the launch of the next Samsung Galaxy Note smartphone...',
  //     color: 'silver',
  //     price: '700€'
  //   },
  //   {
  //     id: 3,
  //     title: 'Motoriola G5S',
  //     image: 'https://i-cdn.phonearena.com/images/phones/71039-xlarge/Motorola-Moto-G5S-0.jpg',
  //     description: 'The Moto G5S sports a 5.2-inch 1080p display (instead of the 5-inch 1080p screen of the regular G5), and ...',
  //     color: 'blue',
  //     price: '500'
  //   }
  // ];

    constructor(private _restPhoneService:RestPhoneService) {
    }

    ngOnInit(){

      this._restPhoneService.get()
        .toPromise()
        .then(data => {
        this.listOfPhones = data;
        this.loading = false;
        });
    }

}
