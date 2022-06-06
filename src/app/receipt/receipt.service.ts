import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private URL_RECEIPT_DATA = "http://localhost:8000/api/get-complete-order-details";
  private URL_CART_DATA = "http://localhost:8000/api/get-cart-data";

  receipt_view(
    basket_id: string,
  ){
    let body = new HttpParams()
    .set("basket_id", basket_id)
return this.httpClient.post(`${this.URL_RECEIPT_DATA}`,body)
  }
  getCartData(
    username:any,
  ){
    let body = new HttpParams()
    .set("username", username)
return this.httpClient.post(`${this.URL_CART_DATA}`,body);
  }
}
