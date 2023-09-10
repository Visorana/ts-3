import Buyable from './Buyable';

export default class Laptop implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly brand: string,
        readonly price: number,
        readonly maxQuantity: number = 5,
    ) {}
}