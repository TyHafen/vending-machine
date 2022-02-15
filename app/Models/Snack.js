import { generateId } from "../Utils/generateId.js"

export class Snack {
    constructor(name, price, quantity, imgURL) {
        this.name = name
        this.price = price
        this.quantity = quantity
        this.imgURL = imgURL
    }

    get Template() {
        return `
        <div class="col-8">
            <img class="img-fluid" id="${this.name}" src="${this.imgURL}" onclick="app.vendingController.purchase('${this.name}')" alt="">
                <h2>quantity ${this.quantity}</h2>
                <h2>price ${this.price}</h2>               
        </div>
        `
    }
}
