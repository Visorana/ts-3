import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: { item: Buyable; quantity: number }[] = [];

    add(item: Buyable): void {
        const itemAlreadyInCart = this._items.find(existing => existing.item.id === item.id);
    
        if (itemAlreadyInCart) {
            if (itemAlreadyInCart.quantity < itemAlreadyInCart.item.maxQuantity) {
                itemAlreadyInCart.quantity += 1;
            } else {
                throw new Error(`Maximum quantity of ${itemAlreadyInCart.item.name} has been exceeded.`)
            }
        } else {
            this._items.push({item, quantity: 1})
        }
    }

    get items(): { item: Buyable; quantity: number }[] {
        return [...this._items]; 
    }

    calculateTotalPrice(): number {
        return this.items.reduce((total, cartItem) => total + (cartItem.item.price * cartItem.quantity), 0);
    }

    calculateTotalPriceWithDiscount(discount: number): number {
        const totalPrice = this.calculateTotalPrice();
        return totalPrice - (totalPrice * discount) / 100;
    }

    deleteItem(id: number): void {
        this._items = this._items.filter(cartItem => cartItem.item.id !== id);
    }
}