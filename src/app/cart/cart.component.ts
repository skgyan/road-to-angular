import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items: Product[] = this.cart.getItems();

  checkoutForm = this.form.group({
    name: '',
    address: '',
  });

  constructor(private cart: CartService, private form: FormBuilder) {}

  onSubmit(): void {
    this.items = this.cart.clearCart();
    console.warn('Your order has been sumbitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
