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

  constructor(private navCtrl: NavController) {}

  openSettings(){
    console.log('Settings triggered');
    this.navCtrl.navigateForward('/profile/settings');
  }

  // ngOnInit() {
  // }

}
