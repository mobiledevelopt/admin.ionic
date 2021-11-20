/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAreaRoutingModule } from './manage-area-routing.module';
import { ManageAreaComponent } from './manage-area.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

@NgModule({
  declarations: [ManageAreaComponent],
  imports: [
    CommonModule,
    ManageAreaRoutingModule,
    SharedModule,
    GooglePlaceModule,
  ]
})

export class ManageAreaModule { }
