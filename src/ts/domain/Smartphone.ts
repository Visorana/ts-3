import Buyable from './Buyable';

export default class Smartphone implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly brand: string,
        readonly price: number,
        readonly maxQuantity: number = 10,
    ) {}
}