import { Component, OnInit } from '@angular/core';
import { MongoService } from '../mongo.service';
import { User } from '../auth/user';

@Component({
  selector: 'app-vendor-order-history-comp',
  templateUrl: './vendor-order-history-comp.component.html',
  styleUrls: ['./vendor-order-history-comp.component.css']
})
export class VendorOrderHistoryCompComponent implements OnInit {

  orders;
  orderRes;

  constructor(
    private mongoService : MongoService
  ) {
    const phone = User.phone;
    this.mongoService.getOrderHistory(phone)
    .subscribe( (res) => {
      this.orderRes = res;
      this.orders = this.orderRes.orders;
    })

   }

  
  ngOnInit() {
  }

}
