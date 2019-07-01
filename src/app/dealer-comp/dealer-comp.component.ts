import { Component, OnInit } from '@angular/core';
import { User } from '../auth/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dealer-comp',
  templateUrl: './dealer-comp.component.html',
  styleUrls: ['./dealer-comp.component.css']
})
export class DealerCompComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  logout(){
    User.auth = false;
    this.router.navigateByUrl("");
  }

}
