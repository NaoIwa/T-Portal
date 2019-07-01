import { Component, OnInit } from '@angular/core';
import { User } from '../../auth/user';
@Component({
  selector: 'app-dealer-profile-comp',
  templateUrl: './dealer-profile-comp.component.html',
  styleUrls: ['./dealer-profile-comp.component.css']
})
export class DealerProfileCompComponent implements OnInit {

  user = User;

  constructor() { }


  ngOnInit() {
  }

}
