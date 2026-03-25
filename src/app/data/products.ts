export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  details: string[];
  inStock: boolean;
  isNew?: boolean;
  isSale?: boolean;
  badge?: string;
}

export const categories = [
  { id: "all", name: "All", icon: "🌊" },
  { id: "fish", name: "Fish", icon: "🐠" },
  { id: "equipment", name: "Equipment", icon: "⚙️" },
  { id: "plants", name: "Plants", icon: "🌿" },
  { id: "tanks", name: "Tanks", icon: "🪣" },
  { id: "food", name: "Food", icon: "🦐" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Clownfish (Pair)",
    price: 29.99,
    originalPrice: 39.99,
    category: "fish",
    image: "https://images.unsplash.com/photo-1722482312877-dda06fc3c23d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    rating: 4.8,
    reviews: 124,
    description: "A beautiful pair of Clownfish, perfect for saltwater aquariums. These vibrant orange and white fish are hardy and great for beginners.",
    details: ["Size: 1–2 inches", "Tank Size: Min 20 gallons", "Temperament: Semi-aggressive", "Diet: Omnivore", "Lifespan: 3–6 years"],
    inStock: true,
    isSale: true,
    badge: "Sale",
  },
  {
    id: "2",
    name: "Betta Fish (Premium)",
    price: 19.99,
    category: "fish",
    image: "https://images.unsplash.com/photo-1639057453143-fb90b2b7cd5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    rating: 4.9,
    reviews: 89,
    description: "A stunning premium Betta fish with vibrant blue and purple coloration. Known for their flowing fins and bold personality.",
    details: ["Size: 2–3 inches", "Tank Size: Min 5 gallons", "Temperament: Aggressive to other bettas", "Diet: Carnivore", "Lifespan: 2–5 years"],
    inStock: true,
    isNew: true,
    badge: "New",
  },
  {
    id: "3",
    name: "Goldfish Fancy",
    price: 12.99,
    category: "fish",
    image: "https://images.unsplash.com/photo-1606136025851-3c3d10b29137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    rating: 4.6,
    reviews: 67,
    description: "Beautiful fancy goldfish with a rounded body and flowing double tail. A classic choice for freshwater aquariums.",
    details: ["Size: 2–4 inches", "Tank Size: Min 20 gallons", "Temperament: Peaceful", "Diet: Omnivore", "Lifespan: 10–15 years"],
    inStock: true,
  },
  {
    id: "4",
    name: "Sea Anemone",
    price: 49.99,
    originalPrice: 64.99,
    category: "plants",
    image: "https://images.unsplash.com/photo-1729736763059-be3568e66e4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    rating: 4.7,
    reviews: 43,
    description: "A colorful sea anemone, perfect for reef tanks. Creates a natural habitat for clownfish and adds stunning movement to your aquarium.",
    details: ["Size: 3–5 inches", "Tank Size: Min 30 gallons", "Light: High", "Water Flow: Moderate", "Care Level: Intermediate"],
    inStock: true,
    isSale: true,
    badge: "Sale",
  },
  {
    id: "5",
    name: "Pro Canister Filter",
    price: 79.99,
    category: "equipment",
    image: "https://images.unsplash.com/photo-1681259245495-7baf845f42dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    rating: 4.5,
    reviews: 211,
    description: "High-performance canister filter for aquariums up to 100 gallons. Provides superior mechanical, chemical, and biological filtration.",
    details: ["Flow Rate: 265 GPH", "Tank Size: Up to 100 gallons", "Media: 3-stage", "Warranty: 2 years", "Dimensions: 8×8×16 inches"],
    inStock: true,
    isNew: true,
    badge: "New",
  },
  {
    id: "6",
    name: "Coral Reef Setup Kit",
    price: 129.99,
    originalPrice: 159.99,
    category: "tanks",
    image: "https://images.unsplash.com/photo-1748423392373-e2fd0ef41529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    rating: 4.8,
    reviews: 56,
    description: "Everything you need to start a beautiful coral reef aquarium. Includes live coral frags, salt mix, and a reef testing kit.",
    details: ["Includes: 5 coral frags", "Salt Mix: 10-gallon pouch", "Test Kit: Ammonia, Nitrite, Nitrate, pH", "Difficulty: Intermediate", "Best For: Saltwater tanks"],
    inStock: true,
    isSale: true,
    badge: "Sale",
  },
  {
    id: "7",
    name: "Aquarium Starter Tank 20G",
    price: 89.99,
    category: "tanks",
    image: "https://images.unsplash.com/photo-1636045466232-539c7bd7817e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    rating: 4.4,
    reviews: 178,
    description: "A complete 20-gallon starter aquarium kit. Includes tank, LED lighting, filter, heater, and water conditioner to get you started right away.",
    details: ["Volume: 20 gallons", "Dimensions: 24×12×16 inches", "Includes: LED light, filter, heater", "Material: Tempered glass", "Warranty: 1 year"],
    inStock: true,
  },
  {
    id: "8",
    name: "Aquatic Plants Bundle",
    price: 24.99,
    category: "plants",
    image: "https://images.unsplash.com/photo-1675042769700-d2ab920e1b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    rating: 4.6,
    reviews: 93,
    description: "A bundle of 6 popular freshwater aquatic plants. Includes java fern, anubias, hornwort, and more. Perfect for planted tank beginners.",
    details: ["Plants: 6 varieties", "Difficulty: Easy", "Light: Low to Medium", "CO2: Not required", "Substrate: Sand or gravel"],
    inStock: true,
    isNew: true,
    badge: "New",
  },
];

export const getFeaturedProducts = () => products.slice(0, 4);
export const getSaleProducts = () => products.filter(p => p.isSale);
export const getNewProducts = () => products.filter(p => p.isNew);
export const getProductsByCategory = (category: string) =>
  category === "all" ? products : products.filter(p => p.category === category);
export const getProductById = (id: string) => products.find(p => p.id === id);
