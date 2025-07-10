import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})


export class LoginPage implements OnInit {
  passwordValue: string = '';
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  openTabs(){
      console.log('Tabs triggered');
      this.navCtrl.navigateForward('/tabs');
    }
}
