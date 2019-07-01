import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MongoService } from '../mongo.service';
import { User } from '../auth/user';

@Component({
  selector: 'app-vendor-selection-comp',
  templateUrl: './vendor-selection-comp.component.html',
  styleUrls: ['./vendor-selection-comp.component.css']
})
export class VendorSelectionCompComponent implements OnInit {
  
  loginDetails;

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private mongoService : MongoService
  ) {

    this.loginDetails = this.formBuilder.group({
      phone : '',
      password : ''
    });
   }

  ngOnInit() {
  }

  serviceRes;
  loginValidate(data){        
    this.mongoService.loginVendor(data)
    .subscribe( (data) => {
      this.serviceRes = data;
      if (this.serviceRes.msg === "found"){
        const info = this.serviceRes.user;
        User.auth = true;
        User.name = info.name;
        User.dob = info.dob;
        User.location = info.location;
        User.phone = info.phone;

        this.router.navigateByUrl("/vendorView");
      }
      else {
        window.alert("Password or phone no. is incorrect");
      }

    })
  }
}
