import { Star, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [wishlisted, setWishlisted] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1200);
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="overflow-hidden cursor-pointer active:scale-[0.97] transition-all duration-200 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(0, 180, 216, 0.14)",
      }}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full object-cover ${compact ? "h-32" : "h-38"}`}
          style={{ height: compact ? 128 : 148 }}
        />
        {/* Dark tint on image */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(2,14,26,0.5) 0%, transparent 55%)" }}
        />
        {product.badge && (
          <span
            className="absolute top-2 left-2 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full"
            style={{
              background: product.isSale
                ? "#FF6B6B"
                : "linear-gradient(135deg, #0077B6, #00B4D8)",
            }}
          >
            {product.badge}
          </span>
        )}
        <button
          onClick={e => { e.stopPropagation(); setWishlisted(!wishlisted); }}
          className="absolute top-2 right-2 p-1.5 rounded-full"
          style={{
            background: "rgba(2,14,26,0.5)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <Heart
            size={13}
            className={wishlisted ? "text-[#FF6B6B] fill-[#FF6B6B]" : "text-white/60"}
          />
        </button>
      </div>
      <div className="p-3">
        <p className="text-white/40 text-[10px] capitalize">{product.category}</p>
        <h3 className="text-white text-sm truncate mt-0.5">{product.name}</h3>
        <div className="flex items-center gap-1 mt-1">
          <Star size={10} className="text-yellow-400 fill-yellow-400" />
          <span className="text-white/50 text-[10px]">{product.rating}</span>
          <span className="text-white/30 text-[10px]">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="text-[#00B4D8] font-semibold text-sm">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-white/30 text-[10px] line-through ml-1">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="p-1.5 rounded-xl transition-all duration-300"
            style={{
              background: addedFeedback
                ? "#22c55e"
                : "linear-gradient(135deg, #0077B6, #00B4D8)",
              transform: addedFeedback ? "scale(1.15)" : "scale(1)",
            }}
          >
            <ShoppingCart size={13} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
