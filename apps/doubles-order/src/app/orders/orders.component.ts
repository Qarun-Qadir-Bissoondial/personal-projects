import { OrdersService } from './../orders.service';
import { Component } from '@angular/core';

@Component({
  selector: 'doubles-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  orders: Order[];

  constructor(
    private order: OrdersService) {

      this.orders = this.order.getOrders();
  }

}
