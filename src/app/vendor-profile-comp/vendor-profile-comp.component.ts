import { Component, OnInit } from '@angular/core';
import { User } from '../auth/user';

@Component({
  selector: 'app-vendor-profile-comp',
  templateUrl: './vendor-profile-comp.component.html',
  styleUrls: ['./vendor-profile-comp.component.css']
})
export class VendorProfileCompComponent implements OnInit {
  user = User;

  constructor() { }

  ngOnInit() {
    
  }

}
