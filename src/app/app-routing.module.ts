import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegistrationComponent } from './registration/registration.component'
import { ScannerComponent } from './scanner/scanner.component'
import { MyCartComponent} from './my-cart/my-cart.component'
import { ReceiptComponent } from './receipt/receipt.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'scanner', component: ScannerComponent },
  { path: 'my-cart', component: MyCartComponent},
  { path: 'receipt', component: ReceiptComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
