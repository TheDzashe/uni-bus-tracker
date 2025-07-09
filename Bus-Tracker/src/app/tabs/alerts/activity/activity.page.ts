import { Component, OnInit} from '@angular/core';
import { AlertsService } from '../alerts.service';
import { NavController } from '@ionic/angular';

interface Activity{
  action: string;
  details: string;
  time: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
  standalone: false,
})
export class ActivityPage implements OnInit {
  activities: Activity[]= [];

  constructor(private alertsService: AlertsService, private navCtrl: NavController) { }

  ngOnInit() {
    this.activities = this.alertsService.activity;
  }

  backAlerts(){
    console.log('Back to alerts triggered! (from activity)');
    this.navCtrl.back();
  }
}
