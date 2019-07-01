import { Component, OnInit } from '@angular/core';
import { User } from '../auth/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-comp',
  templateUrl: './vendor-comp.component.html',
  styleUrls: ['./vendor-comp.component.css']
})
export class VendorCompComponent implements OnInit {

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
