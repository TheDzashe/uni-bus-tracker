import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../alerts.service';
import { NavController } from '@ionic/angular';

interface Notifications {
  title: string;
  message: string;
  time: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: false,
})
export class NotificationsPage implements OnInit {
  notifications: Notifications[] = [];

  constructor(private alertsService: AlertsService, private navCtrl: NavController) {}

  ngOnInit() {
    this.notifications = this.alertsService.notifications;
  }

  backAlerts() {
    console.log('Back to alerts triggered! (from notifications'); 
    this.navCtrl.back(); //this is a function of navCtrl
  }
}
