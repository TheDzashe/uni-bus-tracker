import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertsService } from './alerts.service';

interface Notifications {
  title: string;
  message: string;
  time: string;
  icon: string;
  color: string;
}

interface Activity {
  action: string;
  details: string;
  time: string;
  icon: string;
  color: string;
}


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
  standalone: false,
})

export class AlertsPage {
  //! for now these are manually put alerts and notifications, I will find a way to dynamically populate them soon
  //the arrays info has been declared in the services file

  notifications: Notifications[] = [];
  activity: Activity[] = [];
  

  //this injects Ionic's NavController into the component
  //the NavController provides methods for navigating between pages
  constructor(private navCtrl: NavController, private alertsService: AlertsService) {
    this.notifications = this.alertsService.notifications;
    this.activity = this.alertsService.activity;
  }

  // this makes a forward navigation animation
  openNotifications() {
    console.log('Navigation triggered!'); //this is going to help with debugging
    this.navCtrl.navigateForward('/alerts/notifications');
  }

  openActivity() {
    this.navCtrl.navigateForward('/alerts/activity');
  }
  //! also find a way to do backward navigation for the above stuff


//!alternative method incase the method above stops working
//   constructor(private router: Router) {}
// openNotifications() {
//   this.router.navigate(['/alerts/notifications']);
// }

// openActivity() {
//   this.router.navigate(['/alerts/activity']);
// }
}