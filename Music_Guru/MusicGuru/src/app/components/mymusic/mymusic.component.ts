import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SongApiService } from '../../services/song-api.service';
import { AppConfig }from '../../config/config.constant';

@Component({
selector: 'app-mymusic',
templateUrl: './mymusic.component.html',
styleUrls: ['./mymusic.component.css'],
providers:[SongApiService]
})

export class MymusicComponent implements OnInit {
public mysong: any=[];
// setting flag to show (delete) and (download) button
public flag ='mysong';
// service provide into this component
constructor(private songApiService: SongApiService,private router: Router) { }
// on click of this component i am calling getAllMySong method to get all selected song by user
ngOnInit() {
this.getAllMySong();
}
// getting all song into mysong array type of object
getAllMySong(){
let email = JSON.parse(localStorage.getItem('validtoken'))['email']
let name=email.split(".").shift();
this.songApiService.getAllMySong(name).subscribe((res) =>{
this.mysong = res;
console.log("this is mymusic header value "+this.mysong);
console.log(res+"Testing the data noewww");
},(error:any)=>{
console.log(error);
})
}
}
