import { Component } from '@angular/core';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent {
  quantity = 0;
  price = 0;

  calculateTotalCost() {
    return this.quantity * this.price;
  }
}


