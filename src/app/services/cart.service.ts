import { Injectable, signal } from '@angular/core';
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
  public signalCart = signal<Item[]>([])

  addToCart(product:Product){
    const item = this.cart.find(x => x.product === product)
    if(item){
      item.amount += 1
    }
      else{
        this.cart.push({product:product, amount: 1 })
    }
  }
    
  addToSignal(product:Product){
    this.signalCart.update(cart => {
    const index = cart.findIndex(x => x.product === product)
    if(index!==-1){
      const updateItems = [...cart];
      updateItems[index] = {
        ...updateItems[index],
        amount: updateItems[index].amount+1
      }
      return updateItems
    }
    else{
      return [...cart,{product: product, amount: 1}]
    }
  })
  }


/////////////////////////////


////////////////////////////


  increseProductAmount(product:Product){
    const item = this.cart.find(x => x.product === product)
    if(item){
      item.amount += 1 
    }
  }

  incraseSignal(product:Product){
    this.signalCart.update(cart => {
      const index = cart.findIndex(x => x.product === product)
      if(index!==-1){
        const updateItems = [...cart];
        updateItems[index] = {
          ...updateItems[index],
          amount: updateItems[index].amount+1
        }
        return updateItems
      }
      return cart
    })
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
  
  decreaseSignal(product:Product){
    this.signalCart.update(cart => {
      const index = cart.findIndex(x => x.product === product)
      if(index!==-1){
        const updateItems = [...cart];
        updateItems[index] = {
          ...updateItems[index],
          amount: updateItems[index].amount-1
        }
        return updateItems
      }
      return [...cart]
    })
  }

  deleteFromCart(product:Product){
    const item = this.cart.find(x => x.product === product)
    if(item){
      this.cart.splice(this.cart.indexOf(item),1) 
    }
  }

  deleteSignal(product:Product){
    this.signalCart.update(cart => {
      const index = cart.findIndex(x => x.product === product)
      if(index!==-1){
        return [...cart.splice(index,1)]
      }
      return [...cart]
    })
  }

  getCart(){
    return this.cart
  }
}

