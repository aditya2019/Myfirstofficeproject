import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public message = '';
  constructor() { }

  ngOnInit() {
  }
  // if message is yes then show login message
 loginmessage()
 {
  this.message='yes';
  
 }


}
