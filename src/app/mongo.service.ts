import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class MongoService {
 
  constructor(
    private http : HttpClient
  ) { }

  uri = "http://localhost:4000/";

 

  //dealer methods

  signUpDealer(data){
    return this.http.post(this.uri+"addDealer",data);
  }

  loginDealer(data){
    return this.http.post(this.uri+"loginDealer", data);
  }

  createOrderDealer(data){
    return this.http.post(this.uri+"createOrderDealer", data);
  }

  getOrderHistoryDealer(phone){
    return this.http.post(this.uri+"getOrderHistoryDealer", {phone : phone});
  }




  //vendor methods

  signUpVendor(data){            
    return this.http.post(this.uri+"addVendor",data);        
  }

  loginVendor(data){
    return this.http.post(this.uri+"loginVendor",data);      
  }


  createOrder(data){
    return this.http.post(this.uri + "createOrderVendor", data);
  }

  getOrderHistory(phone){
    return this.http.post(this.uri+"getOrderHistoryVendor", {phone : phone});    
  }
}

