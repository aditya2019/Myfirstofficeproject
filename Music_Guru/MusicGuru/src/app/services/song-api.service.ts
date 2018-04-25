import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig }from '../config/config.constant';
@Injectable()
export class SongApiService {
  public msg : any;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http:Http) { }
// hit url to get all song from database
getAllSong()
{
  return this.http.get(AppConfig.getAll)
  .map(data => data.json(),
    (error: any)=>this.handleError(error));
}
 // hit url to update user data into database
 updateDB(getData){
  	console.log(getData);
  	return this.http.post(AppConfig.uploadSongUrl,getData, {headers: this.headers})
  	.map(data => data.json(),
  		(error: any)=>this.handleError(error));
  }
 // erron handling method call
  private handleError(error: Response){
  this.msg=error;
  this.msg.toString();
  }
// put user selected song into mymusic collection
  updateMymusic(putsong)
  {
    return this.http.post(AppConfig.mymusicdb,putsong, {headers: this.headers})
  	.map(data => data.json(),
  		(error: any)=>this.handleError(error));
  }
// url to get all song from mymusic user list
  getAllMySong()
  {
    return this.http.get(AppConfig.getAllMymusic)
    .map(data => data.json(),
      (error: any)=>this.handleError(error));
  }
// url to delete song from mymusic collection

  deletesong(songId) {
    console.log("this is song id "+songId);
    return this.http.delete(AppConfig.songdelete+songId)
    .map(data => data.json(),
    (error: any)=>this.handleError(error));
  }



// url hit to download the song
  downloadsong(songname)
  {
    return this.http.get(AppConfig.downlaodUrl+songname)
  	.map(data => data.json(),
  		(error: any)=>this.handleError(error));
  }
// url hit to put user register data into database
 userdetails(Userobj)
{
  return this.http.post(AppConfig.registerdata , Userobj ,{headers: this.headers})
  .map(data => data.json(),
    (error: any)=>this.handleError(error));
}
// url to hit login data
loginUser(Useraccess){
 return this.http.post(AppConfig.loginUrl,Useraccess, {headers: this.headers})
 .map(loginData => loginData.json(),

   (error:any) =>this.handleError(error));
}
// url hit to put user contact data into database
Usercontact(contactdata)
{
  return this.http.post(AppConfig.contacturl, contactdata ,{headers: this.headers})
  .map(data => data.json(),
    (error: any)=>this.handleError(error));
}
// url hit to put the user feedback data into database
 feedbackSubmit(feedbackdata)
 {
   return this.http.post(AppConfig.feedbackurl, feedbackdata ,{headers: this.headers})
   .map(data => data.json(),
     (error: any)=>this.handleError(error));
 }
// url hit to get data from mymusic collection
 getMymusic(){
 return this.http.get(AppConfig.getmysong)
 .map(data => data.json(),
   (error: any)=>this.handleError(error));
}
//------- close the service
}
