import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RegistrationComponent } from './registration/registration.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { MyCartComponent } from './my-cart/my-cart.component';
import {MatCardModule} from '@angular/material/card';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReceiptComponent } from './receipt/receipt.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



import { ScannerComponent } from './scanner/scanner.component';
// import { ScanditSdkModule } from "scandit-sdk-angular";


const licenseKey = "AQqwHyRbBe38NYylCTkic3gtKAx/EP/MEWVCqQlpaaofUnDADAJboWw2C09AfAoMen1kF5pjrXT7VwQSUUduEKdSdEVRdwYdlX6sJstW0cdCFMJh7DaMz9kbmT4BOdEIN+YST23iP+ERD0a4rtBs5W3yrFKPjj+l9NL9tNn9w173PjIHuvggEOK8J4osg/uEjnblNuIKcFWMDpSPjAEKzirB7ATFb3rZ+18UB5dS9ZaNlX1mtQWy6B0dCfDUC+mdbIuH6r7m+W1NLhYVPkdszzNQU0ms8efOXFn87tx2IX3jwZ7woX0vOVpBRpkb6dth/eqyBTvqXgzVUOCe3ydae8W1oy9gg7/as2hjH5Moa9SWXhNcGXG6y/y7/ChaqOXoWbcaSCE0kVd5VaOVJ4p5I7BLC6s6SK9t3SkYmYbY05TJV1puS+WpBHcse74ipxHtP7Wy3TTm1NRiqnfxXP9mAp2KGaCSn8YrCvo66TAEzUrAsWG+iNsbLOa/IZbZoLO7PSfbb52tuLulHUlFB6O5zdoh13RNSX4dOlGdcIHYy9BBqBJ01E+x8inQx9m3FM9fydfhUCoMC9X8dQLzG8TFkOgsRhHTGuZXg2r8NoMlvTNTaRGhKNJwVKL70UKjagDAvmOrLvyAuhxfIwx7WuuVoYJ74fP/SQfxtJjUqMuq0aH/s78yYK+JriFrUmgd8cRHUkMbJFrFkRuijReZuJLDO3TfcSVQywSb8HV+MVtgfynEjuYqcfwmr17CWOmfGCGZtRMbf5PFG0nrf9gRWxoH7pUpstA2poHkydTTiWpwGQ==";
const engineLocation = "assets/";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MyCartComponent,
    SidenavComponent,
    ReceiptComponent,
    HomeComponent,
    // ZXingScannerModule,
    ScannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule,
    MatSliderModule,
    RouterModule,
    ZXingScannerModule,
    
   // ScanditSdkModule.forRoot(licenseKey, { engineLocation, preloadEngine?: true, preloadBlurryRecognition?: true }),
    
    // ScanditSdkModule.forRoot(licenseKey, { engineLocation })
  ],
  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
