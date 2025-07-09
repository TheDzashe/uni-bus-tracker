import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  
})

export class AlertsService {
    public notifications = [
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


    public activity = [
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
}
