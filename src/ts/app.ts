import Cart from './service/Cart';
import Book from './domain/Book';
import Movie from './domain/Movie';
import MusicAlbum from './domain/MusicAlbum';
import Smartphone from './domain/Smartphone';
import Laptop from './domain/Laptop';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1014, 'Мстители', 'Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 250));
cart.add(new Smartphone(2001, 'Galaxy S21', 'Samsung', 38999, 10));
cart.add(new Laptop(2023, 'MacBook Air', 'Apple', 259990, 3))
cart.deleteItem(1014);
cart.deleteItem(2023);

console.log(cart.items);
console.log(cart.calculateTotalPrice());
console.log(cart.calculateTotalPriceWithDiscount(20))
