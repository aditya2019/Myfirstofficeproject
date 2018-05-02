import { Injectable,EventEmitter } from '@angular/core';
import { Http,RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router,CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';
import { AppConfig }from '../config/config.constant';


@Injectable()
export class AuthenticateUserService {

 	private token:any;
  private role:any;
 	public login : EventEmitter<any> = new EventEmitter();
  public passToken: any;

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private headers2;

  private valueget:any;

	constructor(private http:Http,private router: Router) {

//  this.passToken= new RequestOptions({headers :this.headers2});
  }

  loginUser(Useraccess){
 return this.http.post(AppConfig.gettokenUrl,Useraccess, {headers: this.headers})
 .map((response:Response) =>{

   this.token=response.json().token;
   this.role=response.json().Role;
console.log("token -> "+this.token);
console.log("role ->  "+this.role);
   if (this.token) {
     localStorage.setItem('validtoken', JSON.stringify({ token: this.token }));
     return response;
   }
 },
 (error:any) =>{this.handleError(error)
   console.log(error);
 });
}

// tokensend( ){
//
//     this.token= JSON.parse(localStorage.getItem('validtoken'))['token'];
//     this.headers2 = new Headers({'Authorization' : this.token});
//     let headerjson = JSON.stringify(this.headers2);
//
//     console.log("header value watching "+headerjson);
// return this.http.get(AppConfig.sendtokenUrl,headerjson)
// .map((response:Response) =>{
//   this.valueget=response.json().type;
//  console.log("token retun value"+this.valueget);
// },
// (error:any) =>{this.handleError(error)
//  console.log(error);
// });
// }
// authorization() {
//
//       let token = JSON.parse(localStorage.getItem('validtoken'))['token'];
//
//         let headers = new Headers({ 'Authorization': token });
//         return new RequestOptions({ headers: headers });
//   }


tokensend(){
  let token = JSON.parse(localStorage.getItem('validtoken'))['token'];
    let headers2 = new Headers({ 'Authorization': token });
 let options: RequestOptions = new RequestOptions({ headers: headers2});
    return this.http
    .get(AppConfig.sendtokenUrl, options )
    .map(response=>response.json(),error=>{
      error.json()});
  }



// Handle errors
private handleError(error){
	return Observable.throw(error);
}


}
