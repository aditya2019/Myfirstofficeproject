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

  public role="user";
  public headerToken;
  public name;
  private headers;
  public id;

	constructor(private http:Http,private router: Router) {
    if(localStorage.getItem('validtoken')!=null){
       this.headerToken = JSON.parse(localStorage.getItem('validtoken'))['token'];
    this.login.emit(true);
  }else{
    this.login.emit(false);
  }
  this.headers= new Headers({ 'Content-Type': 'application/json' });
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

//to check whether user is logged in or not
isLoggedIn(){
  if(JSON.parse(localStorage.getItem('validtoken'))){
    return true;
  }
  else{
    return false;
  }
}



// to check if user is logged in
canActivate(){
  if(!this.isLoggedIn()){
    this.router.navigate(['/','login']);
    return false;
  }
  if(this.isLoggedIn && this.role=='user'){
    return true;
  }
  if(this.isLoggedIn && this.role=='admin'){
    this.router.navigate(['/','admin']);
    return true;
  }
  this.router.navigate(['/','login']);
  return false;
}

// getRole(){
// 	return this.http.get((AppConfig.getRoleUrl))
// 	.map((data)=>{
// 		data.json();
// 	},
// 	(error:any) =>this.handleError(error));
// }

// to logout the user from website
logout() {
     // clear token remove user from local storage to log user out
     this.login.emit(false);
     this.token = null;
     localStorage.removeItem('validtoken');
     this.router.navigate(['/','login']);
   }


//submit
// tokensend(){
//   let token = JSON.parse(localStorage.getItem('validtoken'))['token'];
//     let headers2 = new Headers({ 'Authorization': token });
//  let options: RequestOptions = new RequestOptions({ headers: headers2});
//     return this.http
//     .get(AppConfig.sendtokenUrl, options )
//     .map(response=>response.json(),error=>{
//       error.json()});
//   }

// Handle errors
private handleError(error){
	return Observable.throw(error);
}


}
