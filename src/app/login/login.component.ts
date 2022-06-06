import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'; 
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    emailFormControl: new FormControl(''),
    passwordFormControl: new FormControl('')
});
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginservice: LoginService,
  ) {
  }
  
  ngOnInit(): void {
    
  }
  
  get f() { return this.loginForm.controls; }
  login() {

    console.info(this.f)
    let username = this.f['emailFormControl']['value']
    let password = this.f['passwordFormControl']['value']
    this.loginservice.getLogin(username, password).then((res) => {
      console.info(res)
      this.loginservice.getUser(username).subscribe(resp=>{
        localStorage.setItem("username", username)
        console.info(resp,"--------------------")
        let response = resp
      })
      this.router.navigateByUrl('/home')
    }).catch(err => {})
    
  }
  
}
