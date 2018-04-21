import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-most-view',
  templateUrl: './most-view.component.html',
  styleUrls: ['./most-view.component.css']
})
export class MostViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
