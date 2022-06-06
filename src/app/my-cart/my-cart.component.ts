import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MyCartService } from './my-cart.service';

@Component({
  selector: 'my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent {
  username = localStorage.getItem("username");
  item_quantity = 0
  constructor(private router: Router,
   private mycartservice: MyCartService
    
  ) { }
dataArray: any
  ngOnInit(): void {
    this.getCartData()
  }

  increaseQ(item: any, basket_id: any){
    console.info(item['quantity'])
    this.item_quantity = item['quantity'] + 1
    let barcode = item['barcode']
this.mycartservice.update_view(basket_id, this.item_quantity, barcode).subscribe(
  res => {
    this.getCartData()
  }
)
  }
  decreaseQ(item: any, basket_id: any){
    console.info(item['quantity'])
    this.item_quantity = item['quantity'] - 1
    let barcode = item['barcode']
    this.mycartservice.update_view(basket_id, this.item_quantity, barcode).subscribe(
      res => {
        this.getCartData()
      }
    )
  }

  deleteitem(item: any, basket_id: any) {
    let barcode = item['barcode']
    this.mycartservice.delete_item_to_cart(basket_id, barcode).subscribe(
      res => {
        this.getCartData()
      }
    )
  }

   open(basket_id: any) {
  console.info('asdfghjkl')
  localStorage.setItem('basket_id', basket_id)
  this.mycartservice.payment_view(basket_id).subscribe(res => {

    console.info(res,"---------------")
  })
  this.router.navigateByUrl('/receipt')
   }

   getCartData() {
     console.info(this.username)
    this.mycartservice.getCartData(this.username).subscribe((res) => {
      console.info(res,"---------------")
      this.dataArray = res
    })
   }
   goToHome() {
    this.router.navigateByUrl('/home')
  }
  goToCart(basket_id: any) {
    console.info("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", basket_id)
  
    localStorage.setItem('basket_id', basket_id)
    this.router.navigateByUrl('/my-cart')
  }
}

