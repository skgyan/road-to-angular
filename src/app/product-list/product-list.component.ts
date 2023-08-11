import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];
  time = new Observable<string>((observer) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert("Notification: You'll be notified when product goes on sale");
  }

  ngOnInti() {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
