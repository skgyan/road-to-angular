import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  constructor(private cart: CartService) {}

  shippingCosts!: Observable<{ type: string; price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cart.getShippingPrices();
  }
}
