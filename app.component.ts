import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { EventMessage, EventType, InteractionStatus, AuthenticationResult } from '@azure/msal-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {}
}
