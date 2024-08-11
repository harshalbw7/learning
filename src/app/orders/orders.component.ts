import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from './order.interface';


declare var html2pdf: any;
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  isVisible: boolean = false;

  orders: Order[] = [];

  order: Order = {
    orderId: 0,
    orderAmount: 0,
    orderDate: '',
    customerId: 6
  }

  constructor(private orderService: OrderService) {
  }
  ngOnInit(): void {

    this.orderService.getOrders(this.order).subscribe(data => {
      this.orders = data;
    })
  }

  generatePDF() {
    const element = document.getElementById('bill'); // The HTML element to be converted to PDF
    const options = {
      margin: 1,
      filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
  }

  showPopup() {
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
  }
}
