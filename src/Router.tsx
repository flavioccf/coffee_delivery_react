import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/index";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Order } from "./pages/Order";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<Order />} />
      </Route>
    </Routes>
  );
}
