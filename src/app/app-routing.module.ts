import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorSelectionCompComponent} from './vendor-selection-comp/vendor-selection-comp.component'
import { DealerSelectionCompComponent } from './dealer-selection-comp/dealer-selection-comp.component';
import { VendorCompComponent } from './vendor-comp/vendor-comp.component';
import { DealerCompComponent } from './dealer-comp/dealer-comp.component';
import { VendorProfileCompComponent } from './vendor-profile-comp/vendor-profile-comp.component';
import { VendorOrderHistoryCompComponent } from './vendor-order-history-comp/vendor-order-history-comp.component';
import { VendorCreateOrderCompComponent } from './vendor-create-order-comp/vendor-create-order-comp.component';
import { VendorSignupCompComponent } from './vendor-signup-comp/vendor-signup-comp.component';
import { DealerSignupCompComponent } from './dealer-signup-comp/dealer-signup-comp.component';
import { DealerCreateOrderCompComponent } from './dealer/dealer-create-order-comp/dealer-create-order-comp.component';
import { DealerProfileCompComponent } from './dealer/dealer-profile-comp/dealer-profile-comp.component';
import { DealerOrderHistoryCompComponent } from './dealer/dealer-order-history-comp/dealer-order-history-comp.component';
import { AddVendorCompComponent } from './dealer/add-vendor-comp/add-vendor-comp.component';
 
const routes: Routes = [
  {path : '', component : VendorSelectionCompComponent},
  {path : 'vendorSelection', component : VendorSelectionCompComponent},
  {path : 'dealerSelection' , component : DealerSelectionCompComponent},  
  {path : 'vendorSignUp', component : VendorSignupCompComponent},
  {path : 'dealerSignUp', component : DealerSignupCompComponent},
  {path : 'vendorView',
   component : VendorCompComponent,
   children :[
     {
       path : 'profile',
       component : VendorProfileCompComponent
     },
     {
      path : 'orderHist',
      component : VendorOrderHistoryCompComponent
    },
    {
      path : 'createOrder',
      component : VendorCreateOrderCompComponent
    },
    {
      path : '',
      component : VendorCreateOrderCompComponent
    }
   ]   
  },
  {path : 'dealerView',
   component : DealerCompComponent,
   children : [
     {
       path : '',
       component: DealerCreateOrderCompComponent
     },
     {
       path : 'profile',
       component : DealerProfileCompComponent
     },
     {
       path : 'orderHist',
       component : DealerOrderHistoryCompComponent
     },
     {
       path : 'createOrder',
       component : DealerCreateOrderCompComponent
     },
     {
       path : 'addVendor',
       component : AddVendorCompComponent
     }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
