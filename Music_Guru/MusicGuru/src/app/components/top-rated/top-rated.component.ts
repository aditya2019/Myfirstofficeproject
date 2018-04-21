import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SongApiService } from '../../services/song-api.service';
import { AppConfig }from '../../config/config.constant';
@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css'],
  providers:[SongApiService]
})
export class TopRatedComponent implements OnInit {

  public topsong: any=[];
  public flag ='songlist';
  public ImagePathget=AppConfig.urlImgget;
  public SongPathget=AppConfig.urlsongget;
  constructor(private songApiService: SongApiService,private router: Router) { }

  ngOnInit() {
    this.getAllSong();
  }

  getAllSong()
  {
    this.songApiService.getAllSong().subscribe((res) =>{
      this.topsong = res;
      console.log(this.topsong);
    },(error:any)=>{
console.log(error);
    })
  }
}
