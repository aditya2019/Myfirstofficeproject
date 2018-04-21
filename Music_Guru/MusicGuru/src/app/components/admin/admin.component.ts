import { Component, OnInit } from '@angular/core';
import { SongApiService } from '../../services/song-api.service';
import { AppConfig }from '../../config/config.constant';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {NgForm} from '@angular/forms';

@Component({
selector: 'app-admin',
templateUrl: './admin.component.html',
styleUrls: ['./admin.component.css'],
providers:[SongApiService]
})

export class AdminComponent implements OnInit {
public adminData : any={};
public hidden=true;
public  image_path:string="";
public  song_path:string="";
selectedImg=null;
selectedSong=null;
// providers http and service
constructor(private songApiService: SongApiService, private http:Http) { }
ngOnInit() {
}
//  taking name of song image
onImgSelected(event){
this.selectedImg=event.target.files[0];
console.log(this.selectedImg.name);
console.log(this.adminData.type);
}
// taking name of song mp3
onSongSelected(event){
this.selectedSong=event.target.files[0];
console.log(this.selectedSong.name);
console.log(this.adminData.type);
}
// calling backend controller to upload song image
uploadImg(){
const fd = new FormData();
fd.append('file', this.selectedImg)
this.http.post(AppConfig.urlImgpost,fd).subscribe((res)=>{
console.log(res);
});
}
// calling backend controller to upload song
uploadSong(){
const fd = new FormData();
fd.append('file', this.selectedSong)
this.http.post(AppConfig.urlSongpost,fd).subscribe((res)=>{
console.log(res);
});
}
//to update current song details in the database
onSubmit(adminData) {
adminData.image_path=this.selectedImg.name;
adminData.song_path=this.selectedSong.name;
console.log(adminData);
this.songApiService.updateDB(this.adminData).subscribe(data=>{
console.log(data);
},(error:any)=>{
})
}
}
