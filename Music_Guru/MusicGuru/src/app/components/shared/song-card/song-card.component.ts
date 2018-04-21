import { Component, OnInit , Input} from '@angular/core';
import { SongApiService } from '../../../services/song-api.service';
import { AppConfig }from '../../../config/config.constant';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
selector: 'app-song-card',
templateUrl: './song-card.component.html',
styleUrls: ['./song-card.component.css'],
//providers:[SongApiService]
})

export class SongCardComponent implements OnInit{
@Input() songs: any=[];
@Input() flag: string;
public count : any=[];
public ImagePathget=AppConfig.urlImgget;
public SongPathget=AppConfig.urlsongget;
public downlaodUrl=AppConfig.downlaodUrl;
public currentsong : any={};
public deletesongid : any={};
constructor(
private songApiService: SongApiService,
private http:Http,
private router: Router
) { }
ngOnInit() {
}
// set current song on modal
setSong(song){
this.currentsong=song;
// console.log("ddlele "+ this.currentsong.id);
}
// calling updateMymusic method of service to add song into mymusic
addToMymusic(song) {
this.songApiService.updateMymusic(song).subscribe(data=>{
console.log(data);
this.getMymusic();
},(error:any)=>{
})
}
// getting all song from mymusic database
getMymusic()
{
this.songApiService.getMymusic().subscribe((res)=>{
this.count=res;
},(error:any)=>{
})
}
// delete song from mymusic database
deleteSong(song)
{
this.deletesongid=song;
console.log("delete it now "+ this.deletesongid.id);
this.songApiService.deleteSong(this.deletesongid.id).subscribe(data=>{
},(error:any)=>{
})
}
// calling url to download curront song
downloadsong(songname)
{
console.log(songname);
let name=songname.split(".").shift();
console.log(name);
window.location.href = this.downlaodUrl+name;
}
}
