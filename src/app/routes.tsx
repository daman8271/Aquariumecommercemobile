import { createBrowserRouter, Outlet } from "react-router";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";
import { Contact } from "./pages/Contact";
import { BottomNav } from "./components/BottomNav";

function RootLayout() {
  return (
    <div className="min-h-screen bg-[#020E1A] max-w-[430px] mx-auto relative overflow-hidden">
      <Outlet />
      <BottomNav />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "product/:id", Component: ProductDetail },
      { path: "cart", Component: Cart },
      { path: "contact", Component: Contact },
    ],
  },
]);
