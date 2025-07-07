import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
  standalone: false,
})
export class AlertsPage {
  //! for now these are manually put alerts and notifications, I will find a way to dynamically populate them soon

  alerts = [
    {
      title: 'Bus Delay',
      message: 'Route 45 is running 15 minutes late',
      time: '10 min ago',
      icon: 'alert-circle',
      color: 'warning'
    },
    {
      title: 'New Feature',
      message: 'Real-time tracking now available',
      time: '2 hours ago',
      icon: 'notifications',
      color: 'primary'
    },
    {
      title: 'Maintenance',
      message: 'App update scheduled for tonight',
      time: '1 day ago',
      icon: 'construct',
      color: 'medium'
    },
    {
      title: 'Payment Received',
      message: 'Your monthly pass has been renewed',
      time: '2 days ago',
      icon: 'checkmark-circle',
      color: 'success'
    }
  ];

  activity = [
    {
      action: 'Route Completed',
      details: 'You reached Hatfield Campus',
      time: '30 min ago',
      icon: 'checkmark-done',
      color: 'success'
    },
    {
      action: 'Student Card Scan',
      details: 'Student card scanned successfully',
      time: '2 hours ago',
      icon: 'card',
      color: 'primary'
    },
    {
      action: 'New Stop Added',
      details: 'Sunnyside stop now available',
      time: '1 day ago',
      icon: 'add-circle',
      color: 'tertiary'
    },
    {
      action: 'Journey Started',
      details: 'From Hatfield Plaza to Burnett Street',
      time: '2 days ago',
      icon: 'play',
      color: 'medium'
    }
  ];

  //this injects Ionic's NavController into the component
  //the NavController provides methods for navigating between pages
  //constructor(private navCtrl: NavController) {}

  //this makes a forward navigation animation
  // openNotifications() {
  //   console.log('Navigation triggered!');
  //   this.navCtrl.navigateForward('/alerts/notifications');
  // }

  // openActivity() {
  //   this.navCtrl.navigateForward('/alerts/activity');
  // }

  constructor(private router: Router) {}

openNotifications() {
  this.router.navigate(['/alerts/notifications']);
}

openActivity() {
  this.router.navigate(['/alerts/activity']);
}
}