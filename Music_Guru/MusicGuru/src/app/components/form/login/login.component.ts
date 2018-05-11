import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticateUserService } from '../../../services/authenticate-user.service';
import { AppConfig }from '../../../config/config.constant';
import {FormsModule} from '@angular/forms';
import Swal  from 'sweetalert2'

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css'],
providers: [ AuthenticateUserService ]
})

export class LoginComponent implements OnInit {

public Useraccess:any={};
public errorMsg:any={};
public showError : boolean = false;
public wrong = '';
public er:any={};
public identify :any={};
public role:any={};
// service provide into login page
constructor(private authenticateUserService : AuthenticateUserService,private router: Router) { }

ngOnInit() {
}
// calling service loginUser method with value user email and password via( Useraccess)
login(Useraccess){
console.log("user details");
this.authenticateUserService.loginUser(Useraccess).subscribe((response)=>{
this.role=response.json().Role;
if(this.role==='admin')
{
this.router.navigate(['/admin']);
}
else
{
this.router.navigate(['/mymusic']);
}
},(error:any)=>{
this.errorMsg = JSON.parse(error._body);
this.wrong="yes";
Swal({
      title: 'LoginFailed',
      text: this.er.error,
      showConfirmButton: false,
      type: 'warning',
      timer: 1500
    })
    this.errorMsg = error.statusText;
    this.showError = true;
  })
}

}
