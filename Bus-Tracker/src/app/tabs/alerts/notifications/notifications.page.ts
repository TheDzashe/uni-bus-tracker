import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../alerts.service';

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

  constructor(private alertsService: AlertsService) {}

  ngOnInit() {
    this.notifications = this.alertsService.notifications;
  }
}
