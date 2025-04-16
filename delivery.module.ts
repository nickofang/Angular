import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgGridModule } from 'ag-grid-angular'; // Import AG Grid module

import { DeliveryPageRoutingModule } from './delivery-routing.module';
import { DeliveryPage } from './delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgGridModule,
    DeliveryPageRoutingModule
  ],
  declarations: [DeliveryPage] // Declare your DeliveryPage component here
})
export class DeliveryPageModule {}
