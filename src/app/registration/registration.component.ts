import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm = new FormGroup({
    emailFormControl: new FormControl(''),
    passwordFormControl: new FormControl(''),
    usernameFormControl: new FormControl('')
});
  constructor(
    private formBuilder: FormBuilder,
    private regService: RegistrationService,
    private router: Router,
  ) {
  }
  
  ngOnInit(): void {
    
  }
  get f() { return this.registrationForm.controls; }
  registration(){
    let email = this.f['emailFormControl']['value']
    let password = this.f['passwordFormControl']['value']
    let username = this.f['usernameFormControl']['value']

    this.regService.getLogin(email,username,password).then((res)=> {
      // localStorage.setItem("usertoken", r)
      localStorage.setItem("username", username)

      console.info(res,"-----------------------------")
      this.router.navigateByUrl('/home')
    })
  }
}
