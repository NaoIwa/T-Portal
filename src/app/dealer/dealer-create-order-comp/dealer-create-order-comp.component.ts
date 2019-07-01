import { Component, OnInit } from '@angular/core';
import { User } from '../../auth/user';
import { FormBuilder } from '@angular/forms'; 
import { MongoService } from '../../mongo.service';

@Component({
  selector: 'app-dealer-create-order-comp',
  templateUrl: './dealer-create-order-comp.component.html',
  styleUrls: ['./dealer-create-order-comp.component.css']
})
export class DealerCreateOrderCompComponent implements OnInit {

  date = new Date().toDateString();
  location = User.location;

  formDetails;

  constructor(
    private formBuilder : FormBuilder,
    private mongoService : MongoService
  ) {
      this.formDetails = this.formBuilder.group({
        copies : '',
        edition : '',
        date : Date.now()
      });  
    }

  ngOnInit() {
  }

  orderRes;
  createOrder(data){
    let phone = User.phone;
    let order = data;

    let obj = {
      phone : phone,
      order : order
    };   

    //catch error when service is unresponsive
    this.mongoService.createOrderDealer(obj)
    .subscribe( (data)=> {
      this.orderRes = data;
      if (this.orderRes.msg === "success"){
        window.alert("Your order has been successfully placed.")
      }
      else {
        window.alert("Error Occurred, Try again...")
      }
    })
    
  }

}
