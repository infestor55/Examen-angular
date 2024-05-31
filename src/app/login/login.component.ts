import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login= new FormControl('',Validators.required)
  pwd= new FormControl('',Validators.required)
  constructor(private router: Router){}

  affich(){
    console.log(this.login)
  }

  loginForm= new FormGroup({
    login: new FormControl('',[Validators.required,Validators.minLength(3)]),
    pwd: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('^[A-Z].*')])

  })

  navigateTo(){
    this.router.navigateByUrl('/projects')
  }
}
