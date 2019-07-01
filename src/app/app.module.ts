import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms'; 

import { MongoService } from './mongo.service';
import { HttpClientModule } from '@angular/common/http';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectionCompComponent } from './selection-comp/selection-comp.component';
import { VendorSelectionCompComponent } from './vendor-selection-comp/vendor-selection-comp.component';
import { DealerSelectionCompComponent } from './dealer-selection-comp/dealer-selection-comp.component';
import { VendorCompComponent } from './vendor-comp/vendor-comp.component';
import { DealerCompComponent } from './dealer-comp/dealer-comp.component';
import { VendorProfileCompComponent } from './vendor-profile-comp/vendor-profile-comp.component';
import { VendorOrderHistoryCompComponent } from './vendor-order-history-comp/vendor-order-history-comp.component';
import { VendorCreateOrderCompComponent } from './vendor-create-order-comp/vendor-create-order-comp.component';
import { VendorSignupCompComponent } from './vendor-signup-comp/vendor-signup-comp.component';
import { DealerSignupCompComponent } from './dealer-signup-comp/dealer-signup-comp.component';
import { DealerProfileCompComponent } from './dealer/dealer-profile-comp/dealer-profile-comp.component';
import { DealerOrderHistoryCompComponent } from './dealer/dealer-order-history-comp/dealer-order-history-comp.component';
import { DealerCreateOrderCompComponent } from './dealer/dealer-create-order-comp/dealer-create-order-comp.component';
import { AddVendorCompComponent } from './dealer/add-vendor-comp/add-vendor-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionCompComponent,
    VendorSelectionCompComponent,
    DealerSelectionCompComponent,
    VendorCompComponent,
    DealerCompComponent,
    VendorProfileCompComponent,
    VendorOrderHistoryCompComponent,
    VendorCreateOrderCompComponent,
    VendorSignupCompComponent,
    DealerSignupCompComponent,
    DealerProfileCompComponent,
    DealerOrderHistoryCompComponent,
    DealerCreateOrderCompComponent,
    AddVendorCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MongoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
