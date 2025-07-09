import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertsService } from './alerts.service';

//the interfaces will define the data types of my data structures, plus it was complaining without it
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

  //the arrays info has been declared in the services file
  //the lines will initialise empty arrays with the structures from the interface
  notifications: Notifications[] = [];
  activity: Activity[] = [];
  

  //this injects Ionic's NavController into the component
  //the NavController provides methods for navigating between pages
  constructor(private navCtrl: NavController, private alertsService: AlertsService) {

          /* NOTE:  constructor(navCtrl: NavController) {
                      this.navCtrl = navCtrl;
                    } 
          is equivalent to the line private navCtrl: NavController*/


    //copies the references from the alerts services arrays into these local arrays
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