import Cart from '../service/Cart';
import Book from '../domain/Book';
import Smartphone from '../domain/Smartphone';

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  describe('adding items', () => {
    test('new cart should be empty', () => {
      expect(cart.items.length).toBe(0);
    });

    test('adding an item should increase the cart size', () => {
      const book = new Book(1, 'Book Title', 'Author', 100, 10);
      cart.add(book);

      expect(cart.items.length).toBe(1);
    });

    test('adding multiple items should increase the cart size accordingly', () => {
      const smartphone = new Smartphone(1, 'Model', 'Brand', 10000);
      const book = new Book(2, 'Book Title', 'Author', 100, 10);
      cart.add(smartphone);
      cart.add(book);

      expect(cart.items.length).toBe(2);
    });

    test('deleting an item should decrease the cart size', () => {
      const book1 = new Book(1, 'Book Title 1', 'Author', 100, 10);
      const book2 = new Book(2, 'Book Title 2', 'Author', 100, 10);
      cart.add(book1);
      cart.add(book2);
      cart.deleteItem(1);

      expect(cart.items.length).toBe(1);
      expect(cart.items[0].item.id).toBe(2);
    });

    test('adding an item exceeding max quantity should throw an error', () => {
      const smartphone = new Smartphone(1, 'Model', 'Brand', 10000, 2);
      const book = new Book(2, 'Book Title', 'Author', 100, 10);

      cart.add(smartphone);
      cart.add(smartphone);
      cart.add(book);

      expect(() => cart.add(smartphone)).toThrowError();
      expect(() => cart.add(book)).toThrowError();
    });

  });

  describe('calculating prices', () => {
    test('calculating total price should return the correct amount', () => {
      const book1 = new Book(1, 'Book Title 1', 'Author', 100, 10);
      const book2 = new Book(2, 'Book Title 2', 'Author', 100, 10);
      cart.add(book1);
      cart.add(book2);

      const totalPrice = cart.calculateTotalPrice();

      expect(totalPrice).toBe(20);
    });

    test('calculating total price with discount should return the correct amount', () => {
      const book1 = new Book(1, 'Book Title 1', 'Author', 100, 10);
      const book2 = new Book(2, 'Book Title 2', 'Author', 100, 10);
      cart.add(book1);
      cart.add(book2);

      const totalPriceWithDiscount = cart.calculateTotalPriceWithDiscount(20);

      expect(totalPriceWithDiscount).toBe(16);
    });
  });
});
