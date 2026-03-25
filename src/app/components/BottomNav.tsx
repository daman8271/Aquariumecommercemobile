import { Home, Search, ShoppingCart, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import { useCart } from "../context/CartContext";

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems } = useCart();

  const tabs = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Search, label: "Shop", path: "/shop" },
    { icon: ShoppingCart, label: "Cart", path: "/cart" },
    { icon: Mail, label: "Contact", path: "/contact" },
  ];

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 max-w-[430px] mx-auto"
      style={{
        background: "rgba(2, 14, 26, 0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(0, 180, 216, 0.15)",
      }}
    >
      <div className="flex items-center justify-around px-4 py-3 pb-5">
        {tabs.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-all duration-200 active:scale-90"
            >
              <div className="relative">
                <Icon
                  size={22}
                  className={isActive ? "text-[#00B4D8]" : "text-white/40"}
                  strokeWidth={isActive ? 2.5 : 1.8}
                />
                {label === "Cart" && totalItems > 0 && (
                  <span
                    className="absolute -top-1.5 -right-1.5 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-semibold"
                    style={{ background: "#FF6B6B" }}
                  >
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] transition-colors ${
                  isActive ? "text-[#00B4D8]" : "text-white/40"
                }`}
              >
                {label}
              </span>
              {isActive && (
                <div className="w-1 h-1 rounded-full bg-[#00B4D8]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
