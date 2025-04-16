import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
  standalone: false
  ,
  
})
export class DeliveryPage {
  columnDefs: ColDef[] = [
    { headerName: 'Order ID', field: 'orderId' },
    { headerName: 'Item', field: 'item' },
    { headerName: 'Quantity', field: 'quantity' },
    { headerName: 'Status', field: 'status' }
  ];

  rowData = [
    { orderId: '12345', item: 'Drill Machine', quantity: 1, status: 'Pending' },
    { orderId: '67890', item: 'Ladder', quantity: 2, status: 'Pending' }
  ];
}