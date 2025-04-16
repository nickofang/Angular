import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Import the IonicModule
import { AgGridModule } from 'ag-grid-angular';  // Import AG Grid Module
import { ColDef } from 'ag-grid-community'; // Import Ag-Grid types
import { GridOptions } from 'ag-grid-community';  // Import GridOptions type
import { ClientSideRowModelModule } from 'ag-grid-community';


@Component({
  selector: 'app-action',
  standalone: true,  // Keep it standalone
  templateUrl: './action.page.html',
  styleUrls: ['./action.page.scss'],
  imports: [IonicModule, AgGridModule,],  // Use AgGridModule without ClientSideRowModelModule
})
export class ActionPage {
  gridOptions: GridOptions = {}; // Define gridOptions

  columnDefs: ColDef[] = [
    { headerName: 'Order #', field: 'orderId' },
    { headerName: 'Order Date', field: 'orderDate' },
    { headerName: 'Lines', field: 'lines' },
    { headerName: 'Ordered By', field: 'orderedBy' },
    { headerName: 'Status', field: 'status' },
    {
      headerName: 'Select',
      field: 'select',
      checkboxSelection: true,  // This makes it a checkbox
      headerCheckboxSelection: true,  // Enable header checkbox to select all rows
      width: 80
    },
  ];
  

  rowData = [
    { orderId: '12345', orderDate: '2025-04-15', lines: 5, orderedBy: 'John Doe', status: 'Pending' },
    { orderId: '67890', orderDate: '2025-04-16', lines: 3, orderedBy: 'Jane Smith', status: 'Shipped' }
  ];


  // Required for module-based setup
  modules = [ClientSideRowModelModule];
  
}
