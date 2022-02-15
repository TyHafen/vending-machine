import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {
  /** @type {import('./Models/Snack').Snack[]} */
  snacks = [
    new Snack('Poptart', 1.50, 10, 'https://tse3.mm.bing.net/th?id=OIP.BUC2J6BWZVAa8tqY1MUUTAHaJu&pid=Api&P=0&w=125&h=164'),
    new Snack('Soda', 1.00, 10, 'https://tse3.mm.bing.net/th?id=OIP.kwHPZ22NByftHJx7vjQ6yQHaGW&pid=Api&P=0&w=193&h=165')
  ]

  money = 0

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
