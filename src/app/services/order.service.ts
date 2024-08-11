import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../orders/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(order: Order) {
    return this.http.post<Order[]>("http://localhost:8080/foodCourt/orders", order);
  }
}
