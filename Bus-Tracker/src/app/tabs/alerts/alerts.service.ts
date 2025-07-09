//the injectable would make the class a service and that can be injected into components
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
//I want the service to be provided in root so that there can be a shared instance for the entire app


//this means that the AlertsService class can be imported and used in other files
export class AlertsService {
    
    //declaring some arrays below
    //making them public to be easily accessed outside

      //! for now these are manually put alerts and notifications, I will find a way to dynamically populate them soon
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
            title: 'Service Alert',
            message: 'Route 12 will be temporarily closed for maintenance tomorrow.',
            time: '5 hours ago',
            icon: 'information-circle',
            color: 'danger'
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
