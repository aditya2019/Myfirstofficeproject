import { Component, OnInit } from '@angular/core';
import { SongApiService } from '../../../services/song-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthenticateUserService } from '../../../services/authenticate-user.service';
import { AppConfig }from '../../../config/config.constant';
import Swal from 'sweetalert2';

@Component({
selector: 'app-registration',
templateUrl: './registration.component.html',
styleUrls: ['./registration.component.css'],
providers: [ AuthenticateUserService ]
})

export class RegistrationComponent implements OnInit {
public Userobj : any={};
public correct = '';

private form:FormGroup;
  public formData:{};
  public checkPassword:boolean=false;
  public errorMsg ='';
  public showError : boolean = false;

constructor(private authenticateUserService : AuthenticateUserService,private router: Router) { }
ngOnInit() {
  this.form = new FormGroup({
     userName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)] ),
     emailId: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
     password: new FormControl('', [Validators.required,Validators.minLength(6), Validators.maxLength(10)]),
   });
   this.checkPassword=false;
}


// to check password and confirm password match or not
check(value:string){
  if(this.form.get('password').value==value){
    this.checkPassword=false;
  }
  else
    this.checkPassword=true;
}


// calling userdetails method of service with user details via ( Userobj)
// userdetails(Userobj) {
// this.authenticateUserService.userdetails(Userobj).subscribe((res) =>{
// this.Userobj={};
// this.correct='yes';
//
// },(error:any)=>{
//
// })
// }

onSubmit(form){
  this.authenticateUserService.userdetails(form.value).subscribe((res)=>{
    Swal({
      text: "Registered Successfully",
      showConfirmButton: false,
      type: 'success',
      timer:1500,
    })
    this.router.navigate(['/login']);
  },(error:any)=>{
    this.errorMsg = error.statusText;
    this.showError = true;
    console.log(form.value);
  })
}




}
