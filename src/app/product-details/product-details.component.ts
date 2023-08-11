import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: Product | undefined;
  navStart: Observable<NavigationStart>;

  constructor(
    private route: ActivatedRoute,
    private cart: CartService,
    router: Router
  ) {
    this.navStart = router.events.pipe(
      filter((evt) => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.navStart.subscribe(() => console.log('Navigation Started!'));

    this.route.url.subscribe((url) =>
      console.log('The URL changed to: ' + url)
    );

    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product: Product) {
    this.cart.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
