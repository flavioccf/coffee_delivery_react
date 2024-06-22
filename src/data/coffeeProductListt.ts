export interface CoffeeItem {
  id: string;
  name: string;
  img: string;
  description: string;
  price: number;
  currency: string;
  tags: string[];
}
import traditionalCoffee from "./../assets/coffees/traditional.png";
export const coffeeProductList: CoffeeItem[] = [
  {
    id: "traditional_espresso",
    name: "Traditional Espresso",
    img: traditionalCoffee,
    description: "The most traditional espresso ever",
    price: 9.9,
    currency: 'CAD',
    tags: ['traditional']
  },
  {
    id: "americano_espresso",
    name: "Espresso Americano",
    img: traditionalCoffee,
    description: "More diluted and less intense coffee",
    price: 8.9,
    currency: 'CAD',
    tags: ['traditional']
  }
  ,
  {
    id: "creamy_espresso",
    name: "Creamy Americano",
    img: traditionalCoffee,
    description: "Your traditional espresso with a creamy topping",
    price: 8.9,
    currency: 'CAD',
    tags: ['traditional']
  },
  {
    id: "iced_espresso",
    name: "Iced Americano",
    img: traditionalCoffee,
    description: "Prepared with espresso shots and ice cubes",
    price: 8.9,
    currency: 'CAD',
    tags: ['traditional','iced']
  }
]