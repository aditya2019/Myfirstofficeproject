import { Component, OnInit } from '@angular/core';
import { SongApiService } from '../../../services/song-api.service';

@Component({
selector: 'app-registration',
templateUrl: './registration.component.html',
styleUrls: ['./registration.component.css'],
providers: [SongApiService ]
})

export class RegistrationComponent implements OnInit {
public Userobj : any={};
public correct = '';
// service provide into registration form
constructor(private songApiService: SongApiService) { }
ngOnInit() {
}
// calling userdetails method of service with user details via ( Userobj)
userdetails(Userobj) {
this.songApiService.userdetails(Userobj).subscribe((res) =>{
this.Userobj={};
this.correct='yes';
},(error:any)=>{

})
}
}
