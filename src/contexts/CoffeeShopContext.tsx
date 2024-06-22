import { createContext, ReactNode, useState } from "react";
import { CoffeeItem } from "../data/coffeeProductListt";

interface CoffeeShopContextType {
  cart: CoffeeItem[];
}

export const CoffeeShopContext = createContext({} as CoffeeShopContextType);

interface CoffeeShopContextProviderProps {
  children: ReactNode;
}

export function CoffeeShopContextProvider({
  children,
}: CoffeeShopContextProviderProps) {
  const [cart, setCart] = useState<CoffeeItem[]>([]);

  return (
    <CoffeeShopContext.Provider value={{ cart }}>
      {children}
    </CoffeeShopContext.Provider>
  );
}
