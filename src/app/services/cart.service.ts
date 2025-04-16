import { Injectable } from '@angular/core';
import { Product } from '../../data/products';


export interface Item{
  product: Product
  amount:number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cart: Item [] = [];

  addToCart(product:Product){
    const item = this.cart.find(x => x.product === product)
    if(item){
      item.amount += 1
    }
      else{
        this.cart.push({product:product, amount: 1 })
    }
  }

  increseProductAmount(product:Product){
    const item = this.cart.find(x => x.product === product)
    if(item){
      item.amount += 1 
    }
  }
  decreaseProductAmount(product:Product){
    const item = this.cart.find(x => x.product === product)
    if(item){
      item.amount -= 1 
      if(item.amount===0){
        this.cart.splice(this.cart.indexOf(item),1) 
      }
    }
  }
  deleteFromCart(product:Product){
    const item = this.cart.find(x => x.product === product)
    if(item){
      this.cart.splice(this.cart.indexOf(item),1) 
    }
  }

  getCart(){
    return this.cart
  }
}

