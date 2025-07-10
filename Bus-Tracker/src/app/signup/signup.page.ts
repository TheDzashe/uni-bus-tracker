import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: false,
})
export class SignupPage implements OnInit {
  passwordValue:string ='';
  constructor(private navCtrl: NavController) { }

  openCompleteProfile(){
    this.navCtrl.navigateForward('/signup/complete-profile');
  }
  ngOnInit() {
  }

}
