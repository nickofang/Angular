import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router';
import { AuthenticationResult } from '@azure/msal-browser'; // <-- Add this import

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})

export class LoginPage implements OnInit {

  constructor(private msalService: MsalService, private router: Router) {}

  ngOnInit(): void {
    // Explicitly initialize MSAL
    this.msalService.instance
      .initialize()
      .then(() => {
        console.log('MSAL instance initialized');
      })
      .catch((error) => {
        console.error('MSAL initialization failed', error);
      });
  }

  login() {
    console.log('Login button clicked');


    // Ensure MSAL is initialized
    if (this.msalService.instance) {
      console.log('MSAL initialized successfully');
      
      // Proceed with login using popup flow
      this.msalService.loginPopup()
        .subscribe({
          next: (response: AuthenticationResult) => {
            console.log('Login successful', response);
            this.handleLoginSuccess(response);
          },
          error: (error) => {
            console.log('Login failed', error);
          }
        });
    } else {
      console.error('MSAL is not initialized.');
    }
  }

  handleLoginSuccess(response: AuthenticationResult) {
    console.log('Handling login success...');
    this.router.navigate(['/action']);  // Navigate to the action page after successful login
  }
}
