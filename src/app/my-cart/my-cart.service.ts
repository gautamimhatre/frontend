import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyCartService {

  constructor(
    private httpClient: HttpClient

  ) { }

  private URL_CART_DATA = "http://localhost:8000/api/get-cart-data";
  private DELETE_CART_DATA = "http://localhost:8000/api/delete-item-to-cart/";
  private PAYMENT_VIEW = "http://localhost:8000/api/payment-view/";
  private UPDATE_VIEW = "http://localhost:8000/api/update-cart-item/"
  getCartData(
    username:any,
  ){
    let body = new HttpParams()
    .set("username", username)
return this.httpClient.post(`${this.URL_CART_DATA}`,body);
  }
  delete_item_to_cart(
    basket_id:any,
    barcode: any
  ){
    let body = new HttpParams()
    .set("basket_id", basket_id)
    .set("barcode", barcode)
return this.httpClient.post(`${this.DELETE_CART_DATA}`,body)
  }
  payment_view(
    basket_id:any,
  ){
    let body = new HttpParams()
    .set("basket_id", basket_id)
return this.httpClient.post(`${this.PAYMENT_VIEW}`,body)
  }

  update_view(
    basket_id:any,
    quantity: any,
    barcode: any
  ){
    let body = new HttpParams()
    .set("basket_id", basket_id)
    .set('barcode', barcode)
    .set('quantity', quantity)
return this.httpClient.post(`${this.UPDATE_VIEW}`,body)
  }
}
