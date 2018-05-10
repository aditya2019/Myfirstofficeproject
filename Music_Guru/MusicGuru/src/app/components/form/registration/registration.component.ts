import { Component, OnInit } from '@angular/core';
import { SongApiService } from '../../../services/song-api.service';
import { Router } from "@angular/router";
import { AuthenticateUserService } from '../../../services/authenticate-user.service';
import { AppConfig }from '../../../config/config.constant';

@Component({
selector: 'app-registration',
templateUrl: './registration.component.html',
styleUrls: ['./registration.component.css'],
providers: [ AuthenticateUserService ]
})

export class RegistrationComponent implements OnInit {
public Userobj : any={};
public correct = '';
// service provide into registration form
constructor(private authenticateUserService : AuthenticateUserService,private router: Router) { }
ngOnInit() {

}
// calling userdetails method of service with user details via ( Userobj)
userdetails(Userobj) {
this.authenticateUserService.userdetails(Userobj).subscribe((res) =>{
this.Userobj={};
this.correct='yes';

},(error:any)=>{

})
}
}
