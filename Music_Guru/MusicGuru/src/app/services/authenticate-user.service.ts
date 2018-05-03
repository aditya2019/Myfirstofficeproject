import { Injectable,EventEmitter } from '@angular/core';
import { Http,RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router,CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';
import { AppConfig }from '../config/config.constant';


@Injectable()
export class AuthenticateUserService implements CanActivate {

 	private token:any;
 	public login : EventEmitter<any> = new EventEmitter();
  public haveToken;
  public role;
  private valueget:any;
  //header to login json
  private headers = new Headers({ 'Content-Type': 'application/json' });
  // header to set token
  private headers2;

	constructor(private http:Http,private router: Router) {
    if(localStorage.getItem('validtoken')!=null){
       this.haveToken = JSON.parse(localStorage.getItem('validtoken'))['token'];
    this.login.emit(true);
  }else{
    this.login.emit(false);
  }
}

// calling login controller to login the value
loginUser(Useraccess){
 return this.http.post(AppConfig.gettokenUrl,Useraccess, {headers: this.headers})
 .map((response:Response) =>{

   this.token=response.json().token;
   this.role=response.json().Role;
   let userId=response.json().Email;
   console.log("token -> "+this.token);
   console.log("role ->  "+this.role);
   console.log("email ->  "+userId);
   if (this.token) {
     // storing to token into localStorage
     localStorage.setItem('validtoken', JSON.stringify({ token: this.token, email: userId }));
     // emit login value to show indication
    	this.login.emit(true);

   }
   return response;
 },
 (error:any) =>{this.handleError(error)
   console.log(error);
 });
}

// to check user is logged in
canActivate(){
  if(!this.isLoggedIn()){
    this.router.navigate(['login']);
    return false;
  }
  if(this.isLoggedIn && this.role=='user'){
   return true;
  }
  this.router.navigate(['login']);
return false;
}

//to check user is logged in or not
isLoggedIn(){
  if(JSON.parse(localStorage.getItem('validtoken'))['token']){
    return true;
  }
  else{
    return false;
  }
}

// to logout the user from website
logout() {
     // clear token remove user from local storage to log user out
     this.token = null;
     localStorage.removeItem('validtoken');
     this.router.navigate['/login'];
   }


//submit
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

}
