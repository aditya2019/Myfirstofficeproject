import { Component, OnInit } from '@angular/core';
import { SongApiService } from '../../services/song-api.service';
import { AppConfig }from '../../config/config.constant';

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
public response :any={};
// using service providers
constructor(private songApiService: SongApiService) { }
ngOnInit() {
}
// calling service Usercontact method , and passing the user data in argument
Usercontact(userData)
{
console.log(userData);
this.songApiService.Usercontact(userData).subscribe((res)=>{
this.response=res;
this.correct='yes'
},(error:any)=>{
this.errorMsg = JSON.parse(error._body);
console.log(this.errorMsg.error);
//this.wrong='yes';
})
}
}
