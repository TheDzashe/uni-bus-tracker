import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage{
// export class ProfilePage implements OnInit {


  profiles =[
    {
      username: 'alexM',
      firstName: 'Alexia',
      lastName: 'Mallo',
      email: 'alexia@gmail.com',
      phone: '+27 00 000 0000',
      gender: 'Female',
      dateOfBirth: '12-03-2000',
      age: '25',
    }
  ]
  constructor(private navCtrl: NavController) {}

  openSettings(){
    console.log('Settings triggered');
    this.navCtrl.navigateForward('/profile/settings');
  }

  // ngOnInit() {
  // }

}
