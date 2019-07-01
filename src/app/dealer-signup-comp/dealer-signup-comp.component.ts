import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { MongoService } from '../mongo.service';
import { Router } from '@angular/router';
import { User } from '../auth/user';


@Component({
  selector: 'app-dealer-signup-comp',
  templateUrl: './dealer-signup-comp.component.html',
  styleUrls: ['./dealer-signup-comp.component.css']
})
export class DealerSignupCompComponent implements OnInit {

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

  serviceResponse;
  verifyDetails(data){                 
    data.order = [];
    data.vendor = [];

    this.mongoService.signUpDealer(data)
    .subscribe((res) => {
      this.serviceResponse = res;
      if (this.serviceResponse.msg === "success")
        {
          User.auth = true;
          User.dob = data.dob;
          User.location = data.location;
          User.name = data.name;
          User.phone =data.phone;
          

          this.router.navigateByUrl("/dealerView")
        }
      else
        window.alert("Error Occurred, Try later...");
      
    })
   
  }

}
