import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-weekly-top',
  templateUrl: './weekly-top.component.html',
  styleUrls: ['./weekly-top.component.css']
})
export class WeeklyTopComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
