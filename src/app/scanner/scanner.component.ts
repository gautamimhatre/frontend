import {Component, OnInit} from '@angular/core';
import { ScannerService } from './scanner.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit{
  scanResult: any=''
  dataArray: any
  username = localStorage.getItem("username");
  scannedStatus: any
  

  constructor(private scannerService: ScannerService,
    private router: Router) {}

  ngOnInit(): void {
    this.getCartData()
 }

 getCartData() {
  console.info( typeof(this.username), "---------------");

 this.scannerService.getCartData(this.username).subscribe((res) => {
   console.info(res,"---------------")
   this.dataArray = res
 })
}

goToCart(basket_id: any) {
  console.info("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", basket_id)

  localStorage.setItem('basket_id', basket_id)
  this.router.navigateByUrl('/my-cart')
}
onResult(result:any){
  this.scanResult = result
  this.scannerApi()
}

scannerApi() {
  console.info("dlakhflkhakelfhkahef")
  this.scannerService.sacnnerApi(this.scanResult).subscribe((res) => {
    console.info(res,"--------------------------------------------------->>>>>")
    this.scannedStatus = res
  })
}
addItem() {
  this.scannerService.addItemApi(this.scanResult,this.username).subscribe((res) => {
    console.info(res,"---------------->>>>>")
  })
}
goToHome() {
  this.router.navigateByUrl('/home')
}
}

