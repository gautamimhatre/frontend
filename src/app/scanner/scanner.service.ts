import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  constructor(
    private httpClient: HttpClient

  ) { }
  private URL_CART_DATA = "http://localhost:8000/api/get-cart-data";
  private URL_SCAN_API = "http://localhost:8000/api/scanner/";
  private URL_ADD_ITEM = "http://localhost:8000/api/add-item-to-cart/"
  getCartData(
    username:any,
  ){
    console.info(username,"-------!!!!!!!!!!!!")
    let body = new HttpParams()
    .set("username", username)
return this.httpClient.post(`${this.URL_CART_DATA}`,body);
  }

  sacnnerApi(
    barcode:any,
  ){
    let body = new HttpParams()
    .set("barcode", barcode)
return this.httpClient.post(`${this.URL_SCAN_API}`,body);
  }
  addItemApi(
    barcode:any,
    username:any,
  ){
    let body = new HttpParams()
    .set("barcode", barcode)
    .set("username", username)
return this.httpClient.post(`${this.URL_ADD_ITEM}`,body);
  }
}
