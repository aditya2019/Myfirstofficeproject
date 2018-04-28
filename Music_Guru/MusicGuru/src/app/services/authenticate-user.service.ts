import { Injectable,EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router,CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';
import { AppConfig }from '../config/config.constant';


@Injectable()
export class AuthenticateUserService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
	public token:any;

	constructor(private http:Http) { }

  loginUser(Useraccess){
 return this.http.post(AppConfig.gettokenUrl,Useraccess, {headers: this.headers})
 .map((response:Response) =>{
   this.token=response.json().token;
console.log("token value"+this.token);
   if (this.token) {
     localStorage.setItem('validtoken', JSON.stringify({ token: this.token }));
     return response;
   }
 },
 (error:any) =>{this.handleError(error)
   console.log(error);
 });
}


// Handle errors
private handleError(error){
	return Observable.throw(error);
}


}
