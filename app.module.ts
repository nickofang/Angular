import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MsalModule, MsalInterceptor, MsalService, MSAL_INSTANCE, MSAL_GUARD_CONFIG, MSAL_INTERCEPTOR_CONFIG, MsalGuard, MsalGuardConfiguration, MsalInterceptorConfiguration } from '@azure/msal-angular';
import { PublicClientApplication, InteractionType } from '@azure/msal-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';



const b2cPolicies = {
  names: {
    signUpSignIn: 'B2C_1_SignUpSignIn', // Your B2C user flow name
  },
  authorities: {
    signUpSignIn: {
      authority: 'https://BISCITdemo.b2clogin.com/BISCITdemo.onmicrosoft.com/B2C_1_SignUpSignIn',
    },
  },
  authorityDomain: 'biscitdemo.b2clogin.com',
};

export function MSALInstanceFactory(): PublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '29500d06-594b-4053-a626-e17c094d20db',
      authority: b2cPolicies.authorities.signUpSignIn.authority,
      knownAuthorities: [b2cPolicies.authorityDomain],
      redirectUri: 'http://localhost:8100/', // or your production URI
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: false, // Set to true for IE 11
    },
  });
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: ['https://BISCITdemo.onmicrosoft.com/backend-api/access_backend'], // Your scope from API permissions
    },
  };
}
//Back end Down here
export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set('https://localhost:7071/api/', ['https://BISCITdemo.onmicrosoft.com/backend-api/access_backend']);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap,
  };
}
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),MsalModule,AppRoutingModule, HttpClientModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: MSAL_INSTANCE, useFactory: MSALInstanceFactory },
    { provide: MSAL_GUARD_CONFIG, useFactory: MSALGuardConfigFactory },
    { provide: MSAL_INTERCEPTOR_CONFIG, useFactory: MSALInterceptorConfigFactory },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalService,
    MsalGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}