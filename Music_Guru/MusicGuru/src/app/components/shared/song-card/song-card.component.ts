import { Component, OnInit , Input, SimpleChange} from '@angular/core';
import { SongApiService } from '../../../services/song-api.service';
import { AppConfig }from '../../../config/config.constant';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
// import alertify from 'alertify.js';
// import { ChangeDetectorRef } from "@angular/core"

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
public currentsong : any=[];
public songdelete : any={};
public playsongvalue : any={};
public s : any={};

public meassge = '';

public nextsong : any={};

public useremail = 'aditya@gmail.com';


public wrong = '';
private showPlayer: boolean = true;
constructor(
private songApiService: SongApiService,
private http:Http,
private router: Router,
// private ref: ChangeDetectorRef,

) { }

// ngOnInit() {
// }

  // @Input() fileToPlay:string;

  ngOnInit(){
    // if (this.playsongvalue != '') {
    //   this.showPlayer = true;
    // }
  }

  // ngOnChanges(changes: {[propKey: string]: SimpleChange}){
  //   if (changes['playsongvalue'] !== undefined) {
  //
  //
  //    if(changes['playsongvalue'].previousValue !== changes['playsongvalue'].currentValue && changes['playsongvalue'].currentValue !== '') {
  //     this.showPlayer = false;
  //     setTimeout(() => this.showPlayer = true, 0);
  //   }
  // }
  // }
// serching the song
search(name){
  this.songApiService.searchByName(name).subscribe((res)=>{
    this.songs=res;
  },(error:any)=>{
  })
}
// set current song on modal
setSong(song){
this.currentsong=song;

}
test(song)
{
  this.nextsong=song;

//   var msg = "<div class='container'><div class='row'><div class='col-md-5 col-sm-5'><img class='img-fluid' src='"+this.ImagePathget+this.nextsong.image_path+"'>" +"<p>thisi sno</p>"+
//             "<h4> this is my name </h4>"+
//             "<audio controls src='"+this.SongPathget+this.nextsong.song_path+"'></audio>" +
//           "<h3 style='color:blue;'>This is HTML</h3>";
// alertify.delay(0).maxLogItems(1).log(msg);

// var msg = "<div class='container-fluid'><div class='row'><div class='col-md-4 col-sm-4'><div class='card'><div class='row'><div class='col-md-4'><img class='img-fluid' src='"+this.ImagePathget+this.nextsong.image_path+"' alt='Card image cap'></div><div class='col-md-8'><div style='padding:20px;'><p><strong>Song Name-:&nbsp;</strong>Tere Naam</p><p ><strong>Singer Name-:&nbsp;</strong>7 ***</p></div></div></div><div class='row'><div class='col-md-4 col-sm-4 '><audio controls controlsList='nodownload' style='width:400px;background-color: #95B9C7;'><source style='background-color: #95B9C7;' src='https://www.w3schools.com/tags/horse.mp3' type='audio/mpeg'></audio></div></div></div></div></div></div>"
//
// alertify.delay(0).maxLogItems(1).log(msg);
 }
// set current song
playSong(song)
{
    this.playsongvalue=song;
     // this.ref.detectChanges();
     console.log(this.playsongvalue.song_path);

 //  this.getsongname =JSON.parse(song)
 //  console.log("dekhna hai kya aya"+this.getsongname);
 //  this.playsongvalue=song;
 //  this.print = JSON.stringify(song.song_path);
 //  console.log("vauel is  "+JSON.stringify(song.song_path));
 // console.log("type of "+this.print);
 // this.iit=this.print.replace(/['"]+/g, '');
 // let kls=this.print.split(" ");
 // console.log("ye lo"+this.print.replace(/['"]+/g, ''));
//this.final=this.SongPathget+this.iit;
// let audio = new Audio();
// audio.src = "final";
// audio.load();
// audio.play();
}

//
// playnowji(song)
// {
//   this.getsongname=song.song_path;
// //   console.log("dekhna hai kya aya"+this.getsongname);
// //   let audio = new Audio();
// // audio.src = this.SongPathget+this.getsongname;
// // audio.load();
// // audio.play();
// }
// calling updateMymusic method of service to add song into mymusic


addToMymusic(song) {
  if(localStorage.getItem('validtoken')!=null){
    console.log("if");
    var concattedjson = JSON.parse(JSON.stringify(song));
  let emailvalue = JSON.parse(localStorage.getItem('validtoken'))['email']
    console.log("ye hai email ki value ---> "+emailvalue);
    concattedjson['userEmail']=emailvalue;
    this.songApiService.updateMymusic(concattedjson).subscribe(data=>{

    //this.getMymusic();
    },(error:any)=>{
    })

}else{
  // console.log("else");
  // alertify.success("you have to login ");
}

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
deletesong(songid)
{
  var x=new String(songid);
  this.songApiService.deletesong(x).subscribe((res)=>{
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
