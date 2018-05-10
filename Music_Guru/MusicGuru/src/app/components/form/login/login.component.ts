import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticateUserService } from '../../../services/authenticate-user.service';
import { AppConfig }from '../../../config/config.constant';

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
public identify :any={};
public role:any={};
// service provide into login page
constructor(private authenticateUserService : AuthenticateUserService,private router: Router) { }

ngOnInit() {
}
// calling service loginUser method with value user email and password via( Useraccess)
login(Useraccess){
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
})
}

}
