import { ArrowLeft, SlidersHorizontal, Search, X } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { categories, getProductsByCategory } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export function Shop() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilter, setShowFilter] = useState(false);

  const filtered = getProductsByCategory(activeCategory).filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const glassPanelStyle: React.CSSProperties = {
    background: "rgba(0, 119, 182, 0.1)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(0, 180, 216, 0.18)",
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020E1A] pb-24">

      {/* Header */}
      <div
        className="px-4 pt-14 pb-4 sticky top-0 z-30"
        style={{
          background: "rgba(2,14,26,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0, 180, 216, 0.1)",
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate("/")}
            className="p-2.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <ArrowLeft size={18} className="text-white" />
          </button>
          <h1 className="text-white text-lg flex-1">Explore Shop</h1>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="p-2.5 rounded-full transition-all"
            style={
              showFilter
                ? { background: "#0077B6", border: "1px solid #0077B6" }
                : { background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }
            }
          >
            <SlidersHorizontal size={18} className="text-white" />
          </button>
        </div>

        {/* Search */}
        <div
          className="flex items-center gap-2 px-4 py-3 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(0, 180, 216, 0.18)",
          }}
        >
          <Search size={17} className="text-white/40 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search fish, equipment, plants..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="bg-transparent flex-1 text-sm text-white outline-none placeholder:text-white/30"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")}>
              <X size={15} className="text-white/40" />
            </button>
          )}
        </div>

        {/* Filter Panel */}
        {showFilter && (
          <div
            className="mt-3 p-3 rounded-2xl"
            style={glassPanelStyle}
          >
            <p className="text-white/50 text-xs mb-2 font-medium">Sort by</p>
            <div className="flex flex-wrap gap-2">
              {[
                { value: "featured", label: "Featured" },
                { value: "price-low", label: "Price ↑" },
                { value: "price-high", label: "Price ↓" },
                { value: "rating", label: "Top Rated" },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setSortBy(opt.value)}
                  className="text-xs px-3 py-1.5 rounded-full transition-all"
                  style={
                    sortBy === opt.value
                      ? { background: "#0077B6", color: "white", border: "1px solid #0077B6" }
                      : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)" }
                  }
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="px-4 mt-4 space-y-4">
        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all"
              style={
                activeCategory === cat.id
                  ? { background: "linear-gradient(135deg, #0077B6, #00B4D8)", color: "white", border: "1px solid transparent" }
                  : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.1)" }
              }
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Result count */}
        <div className="flex items-center justify-between">
          <p className="text-white/40 text-sm">
            {sorted.length} {sorted.length === 1 ? "product" : "products"} found
          </p>
          {activeCategory !== "all" && (
            <button
              onClick={() => setActiveCategory("all")}
              className="text-[#FF6B6B] text-xs flex items-center gap-1"
            >
              <X size={12} /> Clear
            </button>
          )}
        </div>

        {/* Products Grid */}
        {sorted.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {sorted.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <span className="text-5xl mb-3">🐟</span>
            <h3 className="text-white">No products found</h3>
            <p className="text-white/40 text-sm mt-1">Try a different search or category</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              className="mt-5 px-6 py-2.5 rounded-full text-white text-sm"
              style={{ background: "linear-gradient(135deg, #0077B6, #00B4D8)" }}
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
