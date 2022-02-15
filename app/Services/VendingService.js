import { ProxyState } from "../AppState.js";




class VendingService {
  money() {

    ProxyState.money += .25
    console.log(ProxyState.money)
  }
  purchase(name) {
    let snack = ProxyState.snacks.find(i => i.name == name)
    if (ProxyState.money < snack.price) {
      alert('No money')
    } else {
      ProxyState.money -= snack.price
      snack.quantity--
      if (snack.quantity < 0) {
        snack.quantity = 0
      }
    }
    ProxyState.snacks = ProxyState.snacks
  }
}



export const vendingService = new VendingService()

