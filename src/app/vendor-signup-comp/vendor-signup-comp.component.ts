import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { MongoService } from '../mongo.service';
import { Router } from '@angular/router';
import { User } from '../auth/user';

@Component({
  selector: 'app-vendor-signup-comp',
  templateUrl: './vendor-signup-comp.component.html',
  styleUrls: ['./vendor-signup-comp.component.css']
})
export class VendorSignupCompComponent implements OnInit {
  
  today_date = new Date().toDateString();
  signUpDetails;
  constructor(
    private formBuilder : FormBuilder,
    private mongoService : MongoService,
    private router : Router
  ) {
    this.signUpDetails = this.formBuilder.group({
      date : Date.now(),
      name : '',
      phone : '',
      dob : '',
      location : '',
      password : ''
    });

   }

  ngOnInit() {
  }

  //catch error if service is unresponsive
  serviceResponse;
  verifyDetails(data){          
    //add order array to data json obj
    data.order = [];

    this.mongoService.signUpVendor(data)
    .subscribe((res) => {
      this.serviceResponse = res;
      if (this.serviceResponse.msg === "success")
        {
          User.auth = true;
          User.dob = data.dob;
          User.location = data.location;
          User.name = data.name;
          User.phone =data.phone;

          

          this.router.navigateByUrl("/vendorView")
        }
      else
        window.alert("Error Occurred, Try later...");
      
    })
   
  }
}
