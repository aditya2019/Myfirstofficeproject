import { Component, OnInit } from '@angular/core';
import { SongApiService } from '../../services/song-api.service';
import { AppConfig }from '../../config/config.constant';
import Swal from 'sweetalert2';

@Component({
selector: 'app-contactus',
templateUrl: './contactus.component.html',
styleUrls: ['./contactus.component.css'],
providers: [SongApiService ]
})

export class ContactusComponent implements OnInit {
public userData:any={};
public errorMsg:any={};
public showError : boolean = false;
public correct= '';
	public er:any={};
public response :any={};
// using service providers
constructor(private songApiService: SongApiService) { }
ngOnInit() {
}
// calling service Usercontact method , and passing the user data in argument
Usercontact(userData)
{
this.songApiService.Usercontact(userData).subscribe((res)=>{
this.response=res;
this.userData={};
this.correct='yes'
Swal({
  text: "Submit Successfully",
  showConfirmButton: false,
  type: 'success',
  timer:2000,
})
},(error:any)=>{
  this.er=JSON.parse(error._body);
  Swal({
   title: 'Login Failed',
   text: this.er.error,
   showConfirmButton: false,
   type: 'warning',
   timer: 1500
 })
//this.wrong='yes';
})
}
}
