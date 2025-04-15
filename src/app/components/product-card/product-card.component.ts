import { Component, Input } from '@angular/core';
import { Product } from '../../../data/products';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Item } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() inCart!: boolean;
  @Input() amount!: number;

  constructor(private _cartService: CartService){}

  addToCart(){
   this._cartService.addToCart(this.product)
   console.log(this._cartService.getCart())
  }
 

  receivePage($event: boolean) {
    this.inCart = $event;
  }
}
