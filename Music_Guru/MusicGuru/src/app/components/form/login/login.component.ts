import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SongApiService } from '../../../services/song-api.service';
import { AppConfig }from '../../../config/config.constant';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css'],
providers: [SongApiService ]
})

export class LoginComponent implements OnInit {
public Useraccess:any={};
public errorMsg:any={};
public showError : boolean = false;
public wrong = '';
public identify :any={};
// service provide into login page
constructor(private songApiService: SongApiService,private router: Router) { }
ngOnInit() {
}
// calling service loginUser method with value user email and password via( Useraccess)
login(Useraccess){
this.songApiService.loginUser(Useraccess).subscribe((res)=>{
this.identify=res;
// in response if i am getting user - rout it on userselected list else rout it on admin page
if(this.identify.ok==='user')
{
this.router.navigate(['/mymusic']);
}
else
{
this.router.navigate(['/admin']);
}
this.Useraccess={};
},(error:any)=>{
this.errorMsg = JSON.parse(error._body);
console.log(this.errorMsg.error);
this.wrong='yes';
})
}
}
