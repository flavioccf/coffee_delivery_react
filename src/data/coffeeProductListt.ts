export interface CoffeeItem {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  tags: string[];
}

export const coffeeProductList: CoffeeItem[] = [
  {
    id: "traditional_espresso",
    name: "Traditional Espresso",
    description: "The most traditional espresso ever",
    price: 9.9,
    currency: "CAD",
    tags: ["traditional"],
  },
  {
    id: "americano_espresso",
    name: "Espresso Americano",
    description: "More diluted and less intense coffee",
    price: 8.9,
    currency: "CAD",
    tags: ["traditional"],
  },
  {
    id: "creamy_espresso",
    name: "Creamy Americano",
    description: "Your traditional espresso with a creamy topping",
    price: 8.9,
    currency: "CAD",
    tags: ["traditional"],
  },
  {
    id: "iced_espresso",
    name: "Iced Americano",
    description: "Prepared with espresso shots and ice cubes",
    price: 8.9,
    currency: "CAD",
    tags: ["traditional", "iced"],
  },
  {
    id: "coffe_milk",
    name: "Coffe + Milk",
    description: "Half + Half Espresso with vaporized milk",
    price: 9.9,
    currency: "CAD",
    tags: ["traditional", "milk"],
  },
  {
    id: "coffe_latte",
    name: "Latte",
    description: "Espresso with double milk",
    price: 9.9,
    currency: "CAD",
    tags: ["traditional", "milk"],
  },
  {
    id: "capuccino",
    name: "Capuccino",
    description: "Espresso with milk and cinnamon spice",
    price: 9.9,
    currency: "CAD",
    tags: ["traditional", "milk", "cinnamon"],
  },
  {
    id: "macchiato",
    name: "Macchiato",
    description: "Espresso mixed with milk",
    price: 9.9,
    currency: "CAD",
    tags: ["traditional", "milk"],
  },
];
