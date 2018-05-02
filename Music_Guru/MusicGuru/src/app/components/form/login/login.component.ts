import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
// import { SongApiService } from '../../../services/song-api.service';
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
  private role:any;
// service provide into login page
constructor(private authenticateUserService : AuthenticateUserService,private router: Router) { }

ngOnInit() {
}
// calling service loginUser method with value user email and password via( Useraccess)
login(Useraccess){
this.authenticateUserService.loginUser(Useraccess).subscribe((response)=>{

this.role=response.json().Role;
// console.log("role from ts ->  "+this.role);
// in response if i am getting user - rout it on userselected list else rout it on admin page
if(this.role==='user')
{
this.router.navigate(['/mymusic']);
}
else
{
this.router.navigate(['/admin']);
}
// this.Useraccess={};
},(error:any)=>{
this.errorMsg = JSON.parse(error._body);
// console.log(this.errorMsg.error);
// this.wrong='yes';
})
}

Tokensender()
{
    this.authenticateUserService.tokensend().subscribe((res) =>{
  },(error:any)=>{
  console.log(error);
  })

}


}
