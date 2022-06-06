import { Component, OnInit } from '@angular/core';
import { ReceiptService } from './receipt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {
basket_id: any
dataArray: any
username = localStorage.getItem("username");

  constructor(
    private router: Router,
    private receiptService: ReceiptService,
  ) { }

  ngOnInit(): void {
    
this.getCartData()
    this.getReceiptData()
  }
getReceiptData() {
  this.basket_id = localStorage.getItem('basket_id')
  console.info(this.basket_id)
  this.receiptService.receipt_view(this.basket_id).subscribe(res => {
    this.dataArray = res
    console.info(res,"~~~~~~~~~~~~~~~~~~~~~~")
  })
}
goToHome() {
  this.router.navigateByUrl('/home')
}
getCartData() {
  console.info( typeof(this.username), "---------------");

 this.receiptService.getCartData(this.username).subscribe((res) => {
   console.info(res,"---------------")
 })
}

goToCart(basket_id: any) {
  console.info("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", basket_id)

  localStorage.setItem('basket_id', basket_id)
  this.router.navigateByUrl('/my-cart')
}
}
