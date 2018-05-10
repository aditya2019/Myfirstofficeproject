import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateUserService } from '../../../services/authenticate-user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public message = '';
  public isLogin :boolean = false;
	@Input() login;
  public flag: string;
  constructor(private authenticateUserService: AuthenticateUserService, private router: Router )
  {
    this.authenticateUserService.login.subscribe((login:any)=>{
			this.isLogin=login;
      console.log(this.isLogin);
		});
	}

  ngOnInit() {
     this.isLogin=this.login;
  }
  // if message is yes then show login message
 loginmessage()
 {
  this.message='yes';

 }
 logoutshow()
 {
 //   if(localStorage.getItem('validtoken')!=null){
 //   this.flag='logout';
 // }else
 // {
 //   this.flag='no';
 // }
     this.flag='logout';
 }


 tokenremove()
 {

   this.authenticateUserService.logout();
   this.flag='not'
 }


}
