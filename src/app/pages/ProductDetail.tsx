import { ArrowLeft, Star, Heart, ShoppingCart, Share2, CheckCircle, Package, Truck, Shield } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { getProductById, products } from "../data/products";
import { useCart } from "../context/CartContext";
import { ProductCard } from "../components/ProductCard";

export function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { addToCart, items } = useCart();
  const product = getProductById(id ?? "");
  const [wishlisted, setWishlisted] = useState(false);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<"info" | "details" | "reviews">("info");

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#020E1A]">
        <span className="text-5xl mb-4">🐠</span>
        <h2 className="text-white">Product not found</h2>
        <button
          onClick={() => navigate("/shop")}
          className="mt-4 text-white px-6 py-2.5 rounded-full text-sm"
          style={{ background: "linear-gradient(135deg, #0077B6, #00B4D8)" }}
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const reviews = [
    { name: "Sarah M.", rating: 5, comment: "Absolutely beautiful! The fish arrived healthy and vibrant.", date: "2 days ago" },
    { name: "Jake T.", rating: 4, comment: "Great quality, fast shipping. Very happy with my purchase.", date: "1 week ago" },
    { name: "Priya L.", rating: 5, comment: "Exactly as described. My tank looks amazing now!", date: "2 weeks ago" },
  ];

  const glassPanelStyle: React.CSSProperties = {
    background: "rgba(0, 119, 182, 0.1)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(0, 180, 216, 0.18)",
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020E1A] pb-32">
      {/* Hero Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-cover"
          style={{ height: 300 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(2,14,26,0.4) 0%, rgba(2,14,26,0.7) 100%)" }}
        />

        {/* Top Buttons */}
        <div className="absolute top-12 left-4 right-4 flex justify-between z-10">
          <button
            onClick={() => navigate(-1)}
            className="p-2.5 rounded-full"
            style={{
              background: "rgba(2,14,26,0.5)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <ArrowLeft size={20} className="text-white" />
          </button>
          <div className="flex gap-2">
            <button
              className="p-2.5 rounded-full"
              style={{
                background: "rgba(2,14,26,0.5)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <Share2 size={20} className="text-white" />
            </button>
            <button
              onClick={() => setWishlisted(!wishlisted)}
              className="p-2.5 rounded-full"
              style={{
                background: "rgba(2,14,26,0.5)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <Heart
                size={20}
                className={wishlisted ? "text-[#FF6B6B] fill-[#FF6B6B]" : "text-white"}
              />
            </button>
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <span
            className="absolute bottom-5 left-4 text-white text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              background: product.isSale ? "#FF6B6B" : "linear-gradient(135deg, #0077B6, #00B4D8)",
            }}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Content Card */}
      <div
        className="-mt-5 mx-0 rounded-t-3xl px-5 pt-5 pb-4"
        style={{
          background: "#020E1A",
          borderTop: "1px solid rgba(0, 180, 216, 0.2)",
        }}
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-white/40 text-xs capitalize">{product.category}</p>
            <h1 className="text-white text-xl mt-0.5">{product.name}</h1>
          </div>
          <div className="text-right">
            <p className="text-[#00B4D8] text-xl font-semibold">${product.price.toFixed(2)}</p>
            {product.originalPrice && (
              <p className="text-white/30 text-xs line-through">${product.originalPrice.toFixed(2)}</p>
            )}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map(i => (
              <Star
                key={i}
                size={13}
                className={i <= Math.round(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-white/20 fill-white/20"}
              />
            ))}
          </div>
          <span className="text-white text-sm">{product.rating}</span>
          <span className="text-white/40 text-sm">({product.reviews} reviews)</span>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-1 mt-5 p-1 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {(["info", "details", "reviews"] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 py-2 rounded-xl text-xs capitalize font-medium transition-all"
              style={
                activeTab === tab
                  ? { background: "linear-gradient(135deg, #0077B6, #00B4D8)", color: "white" }
                  : { color: "rgba(255,255,255,0.4)" }
              }
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "info" && (
            <div className="space-y-4">
              <p className="text-white/60 text-sm leading-relaxed">{product.description}</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: Package, label: "In Stock", value: product.inStock ? "Available" : "Out of Stock" },
                  { icon: Truck, label: "Shipping", value: "1–3 Days" },
                  { icon: Shield, label: "Guarantee", value: "30 Days" },
                ].map(item => (
                  <div key={item.label} className="rounded-2xl p-3 text-center" style={glassPanelStyle}>
                    <item.icon size={16} className="text-[#00B4D8] mx-auto mb-1" />
                    <p className="text-white/40 text-[10px]">{item.label}</p>
                    <p className="text-white text-[11px] font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "details" && (
            <div className="space-y-2.5">
              {product.details.map((detail, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle size={14} className="text-[#00B4D8] flex-shrink-0" />
                  <span className="text-white/60 text-sm">{detail}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-3">
              {reviews.map((review, i) => (
                <div key={i} className="rounded-2xl p-3.5" style={glassPanelStyle}>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm font-medium">{review.name}</span>
                    <span className="text-white/30 text-xs">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star
                        key={i}
                        size={11}
                        className={i <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-white/20 fill-white/20"}
                      />
                    ))}
                  </div>
                  <p className="text-white/50 text-xs mt-1.5 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="px-4 mt-4">
          <h2 className="text-white mb-3">Related Products</h2>
          <div className="grid grid-cols-2 gap-3">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      {/* Bottom Bar */}
      <div
        className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto px-4 py-3 pb-6 z-50"
        style={{
          background: "rgba(2,14,26,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(0, 180, 216, 0.15)",
        }}
      >
        <div className="flex items-center gap-3">
          {/* Qty */}
          <div
            className="flex items-center gap-2 px-3 py-2.5 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <button
              onClick={() => setQty(q => Math.max(1, q - 1))}
              className="text-white/70 w-6 h-6 flex items-center justify-center rounded-full text-lg"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              −
            </button>
            <span className="text-white w-5 text-center text-sm">{qty}</span>
            <button
              onClick={() => setQty(q => q + 1)}
              className="text-white/70 w-6 h-6 flex items-center justify-center rounded-full text-lg"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl transition-all"
            style={{
              background: added
                ? "#22c55e"
                : "linear-gradient(135deg, #0077B6, #00B4D8)",
            }}
          >
            {added ? (
              <>
                <CheckCircle size={17} className="text-white" />
                <span className="text-white text-sm font-medium">Added!</span>
              </>
            ) : (
              <>
                <ShoppingCart size={17} className="text-white" />
                <span className="text-white text-sm font-medium">
                  Add to Cart · ${(product.price * qty).toFixed(2)}
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
