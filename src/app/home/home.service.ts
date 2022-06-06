import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private httpClient: HttpClient

  ) { }
  private URL_CART_DATA = "http://localhost:8000/api/get-cart-data";

  getCartData(
    username:any,
  ){
    let body = new HttpParams()
    .set("username", username)
return this.httpClient.post(`${this.URL_CART_DATA}`,body);
  }
}