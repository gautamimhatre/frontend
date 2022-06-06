import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

/**
 * @title Basic buttons
 */

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {
  username = localStorage.getItem("username");
  dataArray: any;
  myimage:string = "assets/images/shopping.jpg";


  constructor(
    private router: Router,
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {
    this.getCartData()
  }
  goToLogin(){
    this.router.navigateByUrl('/login')
  }
  goToScanner(){
    this.router.navigateByUrl('/scanner')
  }
  goToHome() {
    this.router.navigateByUrl('/home')
  }
  getCartData() {
    console.info( typeof(this.username), "---------------");
  
  
   this.homeService.getCartData(this.username).subscribe((res) => {
     console.info(res,"---------------")
     this.dataArray = res
     
   })
  }
  
  goToCart(basket_id: any) {
    console.info("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", basket_id)
  
    localStorage.setItem('basket_id', basket_id)
    this.router.navigateByUrl('/my-cart')
  }
}
