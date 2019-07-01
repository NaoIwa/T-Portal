import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MongoService } from '../mongo.service';
import { User } from '../auth/user';

@Component({
  selector: 'app-dealer-selection-comp',
  templateUrl: './dealer-selection-comp.component.html',
  styleUrls: ['./dealer-selection-comp.component.css']
})
export class DealerSelectionCompComponent implements OnInit {

  loginDetails;

  constructor(
    private router : Router,    
    private formBuilder : FormBuilder,
    private mongoService : MongoService
  ) { 
    this.loginDetails = this.formBuilder.group({
      phone : '',
      password:''
    });
  }

  ngOnInit() {
  }


  serviceRes;
  //{TODO: put actual validation code here}
  loginValidate(data){
    this.mongoService.loginDealer(data)
    .subscribe( (data) => {
      this.serviceRes = data;
      if (this.serviceRes.msg === "found"){
        const info = this.serviceRes.user;
        User.auth = true;
        User.name = info.name;
        User.dob = info.dob;
        User.location = info.location;
        User.phone = info.phone;

        this.router.navigateByUrl("/dealerView");
      }
      else {
        window.alert("Password or phone no. is incorrect");
      }

    })
  }
}
