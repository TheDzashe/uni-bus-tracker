import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.page.html',
  styleUrls: ['./complete-profile.page.scss'],
  standalone: false,
})
export class CompleteProfilePage implements OnInit {
  profile = {
    firstName: '',
    lastName: '',
    email: '', // Will be prefilled from signup
    phone: '',
    gender: '',
    dateOfBirth: '',
    age: ''
  };

  phoneError = '';
  maxDate = new Date().toISOString();
  minDate = new Date(1900, 0, 1).toISOString();

  constructor(private router: Router) {}

  ngOnInit() {
    // Get data passed from signup
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.profile = {
        ...this.profile,
        ...navigation.extras.state
      };
    }
  }

  validatePhone() {
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!this.profile.phone) {
      this.phoneError = '';
    } else if (!phoneRegex.test(this.profile.phone)) {
      this.phoneError = 'Please enter a valid phone number';
    } else {
      this.phoneError = '';
    }
  }

  isProfileComplete() {
    return this.profile.phone && 
           this.profile.gender && 
           this.profile.dateOfBirth &&
           !this.phoneError;
  }

  calculateAge() {
    if (this.profile.dateOfBirth) {
      const dob = new Date(this.profile.dateOfBirth);
      const ageDifMs = Date.now() - dob.getTime();
      this.profile.age = Math.abs(new Date(ageDifMs).getUTCFullYear() - 1970).toString();
    }
  }

  saveProfile() {
    this.calculateAge();
    // Save to your profile service/backend
    console.log('Profile completed:', this.profile);
    this.router.navigate(['/tabs']);
  }

  skipForNow() {
    this.router.navigate(['/tabs']);
  }
}