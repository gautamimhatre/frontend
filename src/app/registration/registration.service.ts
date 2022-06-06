import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private httpClient: HttpClient

  ) { }

  private URL_REGISTER = "http://localhost:8000/api/register/";
  getLogin(
    email: string,
    username:string,
    password: string
  ){
    let body = new HttpParams()
    .set("email", email)
    .set("username", username)
    .set("password", password)
return this.httpClient.post(`${this.URL_REGISTER}`,body).toPromise()
  }
}
