import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }


  private URL_LOGIN = "http://localhost:8000/api/login/";
  private URL_USER = "http://localhost:8000/api/user-data/";

  getLogin(
    username:string,
    password: string
  ){
    let body = new HttpParams()
    .set("username", username)
    .set("password", password)
return this.httpClient.post(`${this.URL_LOGIN}`,body).toPromise()
  }

  getUser(
    username:string,
  ){
    console.info(username,"--------------------------------")
    let body = new HttpParams()
    .set("username", username)
return this.httpClient.post(`${this.URL_USER}`,body)
  }
}
