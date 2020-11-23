export class Product {
    productId: string
    name: string;
    price: number;

    constructor(productId:string, name: string, price:number){
        this.productId = productId
        this.name = name
        this.price = price
    }
}
