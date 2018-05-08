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


}
