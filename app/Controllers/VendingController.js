import { ProxyState } from "../AppState.js";
import { Snack } from "../Models/Snack.js";
import { vendingService } from "../Services/VendingService.js";
import { Pop } from "../Utils/Pop.js";


//Private
function draw() {

  document.getElementById('money').innerText = ProxyState.money



  const snacks = ProxyState.snacks
  let template = ''
  snacks.forEach(s => template += s.Template)
  document.getElementById("item").innerHTML = `${template}`

}

//Public
export class VendingController {
  constructor() {
    ProxyState.on("money", draw)
    ProxyState.on('snacks', draw)
    draw()
  }


  money() {
    vendingService.money()
  }
  purchase(name) {
    vendingService.purchase(name)
  }

}