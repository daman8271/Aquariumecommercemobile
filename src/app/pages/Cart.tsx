import { ArrowLeft, Trash2, ShoppingBag, ChevronRight, Tag, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export function Cart() {
  const navigate = useNavigate();
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice, totalItems } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const discount = promoApplied ? totalPrice * 0.1 : 0;
  const shipping = totalPrice > 50 ? 0 : 5.99;
  const total = totalPrice - discount + shipping;

  const applyPromo = () => {
    if (promoCode.toLowerCase() === "aqua10") {
      setPromoApplied(true);
      setPromoError(false);
    } else {
      setPromoError(true);
      setPromoApplied(false);
    }
  };

  const handleCheckout = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      setOrderPlaced(false);
      navigate("/");
    }, 2800);
  };

  const glassPanelStyle: React.CSSProperties = {
    background: "rgba(0, 119, 182, 0.1)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(0, 180, 216, 0.18)",
  };

  if (orderPlaced) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#020E1A] px-6 text-center">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
          style={{ background: "rgba(0, 180, 216, 0.15)", border: "2px solid rgba(0, 180, 216, 0.3)" }}
        >
          <CheckCircle size={44} className="text-[#00B4D8]" />
        </div>
        <h1 className="text-white text-2xl">Order Placed!</h1>
        <p className="text-white/50 text-sm mt-2">Your aquatic friends are on their way 🐠</p>
        <p className="text-white/30 text-xs mt-1">Estimated delivery: 1–3 business days</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#020E1A] pb-44">

      {/* Header */}
      <div
        className="px-4 pt-14 pb-4 sticky top-0 z-30"
        style={{
          background: "rgba(2,14,26,0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0, 180, 216, 0.1)",
        }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <ArrowLeft size={18} className="text-white" />
          </button>
          <h1 className="text-white text-lg flex-1">My Cart</h1>
          {items.length > 0 && (
            <button onClick={clearCart} className="text-[#FF6B6B] text-sm">
              Clear All
            </button>
          )}
        </div>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1 py-28 px-6 text-center">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mb-5"
            style={{ background: "rgba(0, 119, 182, 0.15)", border: "1px solid rgba(0, 180, 216, 0.2)" }}
          >
            <ShoppingBag size={38} className="text-[#00B4D8]" />
          </div>
          <h2 className="text-white">Your cart is empty</h2>
          <p className="text-white/40 text-sm mt-2">Add some aquatic treasures to get started!</p>
          <button
            onClick={() => navigate("/shop")}
            className="mt-6 text-white px-8 py-3 rounded-2xl text-sm"
            style={{ background: "linear-gradient(135deg, #0077B6, #00B4D8)" }}
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="px-4 mt-4 space-y-3">
          {/* Cart Items */}
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex items-center gap-3 p-3 rounded-2xl"
              style={glassPanelStyle}
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl object-cover flex-shrink-0"
                style={{ width: 72, height: 72 }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-white/40 text-[10px] capitalize">{product.category}</p>
                <h3 className="text-white text-sm truncate">{product.name}</h3>
                <p className="text-[#00B4D8] text-sm font-semibold mt-0.5">${product.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white/70 text-base"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    −
                  </button>
                  <span className="text-white text-sm w-4 text-center">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white/70 text-base"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="p-2 rounded-xl"
                  style={{ background: "rgba(255,107,107,0.15)", border: "1px solid rgba(255,107,107,0.2)" }}
                >
                  <Trash2 size={15} className="text-[#FF6B6B]" />
                </button>
                <p className="text-white text-sm font-semibold">
                  ${(product.price * quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          {/* Promo Code */}
          <div className="rounded-2xl p-4" style={glassPanelStyle}>
            <div className="flex items-center gap-2 mb-2">
              <Tag size={15} className="text-[#00B4D8]" />
              <span className="text-white text-sm font-medium">Promo Code</span>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder='Try "AQUA10"'
                value={promoCode}
                onChange={e => { setPromoCode(e.target.value); setPromoError(false); }}
                className="flex-1 px-3 py-2.5 rounded-xl text-sm text-white outline-none placeholder:text-white/30"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <button
                onClick={applyPromo}
                disabled={!promoCode}
                className="px-4 py-2.5 rounded-xl text-white text-sm disabled:opacity-40"
                style={{ background: "linear-gradient(135deg, #0077B6, #00B4D8)" }}
              >
                Apply
              </button>
            </div>
            {promoApplied && (
              <p className="text-green-400 text-xs mt-1.5 flex items-center gap-1">
                <CheckCircle size={11} /> 10% discount applied!
              </p>
            )}
            {promoError && (
              <p className="text-[#FF6B6B] text-xs mt-1.5">Invalid code. Try "AQUA10"</p>
            )}
          </div>

          {/* Order Summary */}
          <div className="rounded-2xl p-4 space-y-2.5" style={glassPanelStyle}>
            <h3 className="text-white">Order Summary</h3>
            <div className="flex justify-between text-sm text-white/50">
              <span>Subtotal ({totalItems} items)</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            {promoApplied && (
              <div className="flex justify-between text-sm text-green-400">
                <span>Discount (10%)</span>
                <span>−${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-sm text-white/50">
              <span>Shipping</span>
              <span>
                {shipping === 0 ? (
                  <span className="text-green-400">Free</span>
                ) : (
                  `$${shipping.toFixed(2)}`
                )}
              </span>
            </div>
            {shipping > 0 && (
              <p className="text-white/30 text-xs">
                Add ${(50 - totalPrice).toFixed(2)} more for free shipping
              </p>
            )}
            <div className="h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
            <div className="flex justify-between text-white font-semibold">
              <span>Total</span>
              <span className="text-[#00B4D8]">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Delivery Info */}
          <div
            className="rounded-2xl p-4 flex items-center justify-between"
            style={glassPanelStyle}
          >
            <div>
              <p className="text-white/40 text-xs">Delivery Address</p>
              <p className="text-white text-sm">123 Ocean Drive, Mumbai, MH</p>
            </div>
            <ChevronRight size={17} className="text-white/30" />
          </div>
        </div>
      )}

      {/* Checkout Button */}
      {items.length > 0 && (
        <div
          className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto px-4 py-4 pb-8 z-50"
          style={{
            background: "rgba(2,14,26,0.9)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(0, 180, 216, 0.15)",
          }}
        >
          <button
            onClick={handleCheckout}
            className="w-full text-white py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg"
            style={{ background: "linear-gradient(135deg, #0077B6, #00B4D8)" }}
          >
            <ShoppingBag size={18} />
            <span className="font-medium">Checkout · ${total.toFixed(2)}</span>
          </button>
        </div>
      )}
    </div>
  );
}
