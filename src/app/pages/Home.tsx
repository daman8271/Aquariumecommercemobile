import { useNavigate } from "react-router";
import { ChevronDown, Star, Droplets, Wrench, Sparkles, ArrowRight, MapPin, Phone, Clock, Fish } from "lucide-react";
import heroImage from "figma:asset/a508f6cf0149f3d50daabefb147e1f14c9f80a84.png";

export function Home() {
  const navigate = useNavigate();

  const stats = [
    { value: "25+", label: "Years of Trust" },
    { value: "19", label: "Fish Varieties" },
    { value: "500+", label: "Happy Clients" },
    { value: "2", label: "Store Locations" },
  ];

  const services = [
    {
      icon: Fish,
      title: "Live Fish & Marine Life",
      desc: "Premium selection of tropical, freshwater, and saltwater species sourced ethically.",
    },
    {
      icon: Wrench,
      title: "Custom Aquarium Builds",
      desc: "Bespoke tank design and installation tailored to your home or office space.",
    },
    {
      icon: Droplets,
      title: "Tank Maintenance",
      desc: "Regular cleaning, water testing, and health checks by our expert aquarists.",
    },
    {
      icon: Sparkles,
      title: "Aquascaping & Décor",
      desc: "Artistic layouts with live plants, coral, driftwood and custom substrates.",
    },
  ];

  const testimonials = [
    { name: "Riya Sharma", stars: 5, text: "Best aquarium shop in Jammu! The staff is knowledgeable and the fish are always healthy." },
    { name: "Arjun Mehta", stars: 5, text: "Had a custom 200L tank built by them. Absolutely stunning work, exceeded expectations!" },
    { name: "Faisal Lone", stars: 5, text: "25 years of expertise shows. My coral reef tank is thriving thanks to their guidance." },
  ];

  const glassCard: React.CSSProperties = {
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.10)",
  };

  const blueGlassCard: React.CSSProperties = {
    background: "rgba(0, 119, 182, 0.14)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    border: "1px solid rgba(0, 180, 216, 0.22)",
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020E1A] pb-20">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background — new clownfish image */}
        <img
          src={heroImage}
          alt="Clownfish in coral reef"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Layered gradient: darker at top + bottom fade to dark */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,14,26,0.55) 0%, rgba(2,14,26,0.10) 38%, rgba(2,14,26,0.65) 72%, #020E1A 100%)",
          }}
        />

        {/* ── Brand Wordmark — top-left, no icon, no pill ── */}
        <div className="relative z-10 px-5 pt-14">
          <div className="flex flex-col leading-none">
            <span
              className="text-white tracking-[0.22em] uppercase text-xs"
              style={{ letterSpacing: "0.22em", fontWeight: 600, opacity: 0.7 }}
            >
              Est. 1999
            </span>
            <span
              className="text-white tracking-tight"
              style={{
                fontSize: "2.6rem",
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.04em",
                lineHeight: 1.0,
              }}
            >
              MEHTAB
            </span>
            <span
              className="tracking-widest uppercase text-[#00B4D8]"
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.38em",
                lineHeight: 1.6,
              }}
            >
              AQUARIUM
            </span>
          </div>
        </div>

        {/* Hero Text – pinned toward bottom */}
        <div className="relative z-10 mt-auto px-5 pb-10">
          {/* Tagline — bold & authoritative */}
          <h1
            className="text-white leading-tight mb-4"
            style={{
              fontSize: "2.05rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.18,
              textShadow: "0 2px 24px rgba(0,0,0,0.55)",
            }}
          >
            Your house without an aquarium<br />
            <span className="text-[#00B4D8]">is just walls.</span>
          </h1>

          <p
            className="text-white/65 leading-relaxed mb-7"
            style={{ fontSize: "0.91rem" }}
          >
            25 years of trust · 19 fish varieties · Custom builds &amp; maintenance.
            Visit us in Udhampur &amp; Jammu.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => navigate("/shop")}
            className="flex items-center gap-3 px-7 py-4 rounded-2xl text-white shadow-xl active:scale-[0.97] transition-transform"
            style={{
              background: "linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.02em",
              boxShadow: "0 8px 32px rgba(0,119,182,0.45)",
            }}
          >
            Get Started
            <ArrowRight size={18} />
          </button>

          {/* Scroll hint */}
          <div className="flex flex-col items-start mt-8 gap-1 opacity-50">
            <span className="text-white/60 text-xs tracking-widest uppercase">Scroll to explore</span>
            <ChevronDown size={16} className="text-white/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ──────────────────────────────────────── */}
      <section className="px-5 py-10">
        <div className="rounded-3xl p-6" style={blueGlassCard}>
          <span
            className="text-[#00B4D8] uppercase tracking-widest"
            style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.25em" }}
          >
            Who We Are
          </span>
          <h2
            className="text-white mt-2 leading-snug"
            style={{ fontSize: "1.22rem", fontWeight: 700 }}
          >
            Jammu's Most Trusted Aquarium Specialists
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mt-3">
            Founded over 25 years ago, Mehtab Aquarium has been the heart of aquatic life in Udhampur and Jammu. We are passionate fishkeepers, skilled aquascapers, and dedicated caregivers — all under one roof.
          </p>
          <p className="text-white/60 text-sm leading-relaxed mt-2">
            From a first-time goldfish owner to a seasoned reef hobbyist, we guide every customer on their unique aquatic journey.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <div className="w-8 h-px bg-[#00B4D8] rounded-full" />
            <span className="text-[#00B4D8] text-xs tracking-wide" style={{ fontSize: "0.7rem" }}>
              Est. 1999 · Udhampur, J&amp;K
            </span>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────── */}
      <section className="px-5 pb-10">
        <div className="grid grid-cols-2 gap-3">
          {stats.map(s => (
            <div
              key={s.label}
              className="rounded-2xl p-5 text-center"
              style={glassCard}
            >
              <p
                className="text-[#00B4D8]"
                style={{ fontSize: "2.1rem", fontWeight: 800, lineHeight: 1 }}
              >
                {s.value}
              </p>
              <p className="text-white/50 text-xs mt-1.5 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────── */}
      <section className="px-5 pb-10">
        <span
          className="text-[#00B4D8] uppercase tracking-widest"
          style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.25em" }}
        >
          What We Offer
        </span>
        <h2
          className="text-white mt-1 mb-5"
          style={{ fontSize: "1.22rem", fontWeight: 700 }}
        >
          Our Services
        </h2>
        <div className="space-y-3">
          {services.map(service => (
            <div
              key={service.title}
              className="flex gap-4 rounded-2xl p-4"
              style={blueGlassCard}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(0, 180, 216, 0.2)", border: "1px solid rgba(0,180,216,0.25)" }}
              >
                <service.icon size={20} className="text-[#00B4D8]" />
              </div>
              <div>
                <h4 className="text-white text-sm" style={{ fontWeight: 600 }}>{service.title}</h4>
                <p className="text-white/50 text-xs mt-0.5 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FULL WIDTH IMAGE SECTION ─────────────────────────── */}
      <section className="relative mx-5 mb-10 rounded-3xl overflow-hidden" style={{ height: 220 }}>
        <img
          src="https://images.unsplash.com/photo-1733413931571-1b1f7a4785f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
          alt="Coral Reef"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 flex flex-col items-start justify-end p-5"
          style={{ background: "linear-gradient(to top, rgba(2,14,26,0.88) 0%, transparent 60%)" }}
        >
          <p
            className="text-[#00B4D8] uppercase tracking-widest mb-1"
            style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em" }}
          >
            Our Specialty
          </p>
          <h3 className="text-white" style={{ fontSize: "1.1rem", fontWeight: 700 }}>
            Coral Reef &amp; Saltwater Tanks
          </h3>
          <button
            onClick={() => navigate("/shop")}
            className="mt-3 flex items-center gap-1.5 text-[#00B4D8] text-sm"
            style={{ fontWeight: 600 }}
          >
            Browse Products <ArrowRight size={13} />
          </button>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <section className="px-5 pb-10">
        <span
          className="text-[#00B4D8] uppercase tracking-widest"
          style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.25em" }}
        >
          Customer Love
        </span>
        <h2
          className="text-white mt-1 mb-5"
          style={{ fontSize: "1.22rem", fontWeight: 700 }}
        >
          What People Say
        </h2>
        <div className="space-y-3">
          {testimonials.map(t => (
            <div
              key={t.name}
              className="rounded-2xl p-4"
              style={glassCard}
            >
              <div className="flex items-center gap-0.5 mb-2">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/65 text-sm leading-relaxed italic">"{t.text}"</p>
              <p className="text-[#00B4D8] text-xs mt-2" style={{ fontWeight: 700 }}>— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORE INFO ──────────────────────────────────────── */}
      <section className="px-5 pb-10">
        <div className="rounded-3xl p-5" style={blueGlassCard}>
          <span
            className="text-[#00B4D8] uppercase tracking-widest"
            style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.25em" }}
          >
            Visit Us
          </span>
          <h2
            className="text-white mt-1 mb-4"
            style={{ fontSize: "1.1rem", fontWeight: 700 }}
          >
            Our Stores
          </h2>
          {[
            { city: "Udhampur", addr: "Main Bazaar, Udhampur, J&K" },
            { city: "Jammu", addr: "Gandhi Nagar, Jammu, J&K" },
          ].map(store => (
            <div key={store.city} className="flex items-start gap-3 mb-3">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "rgba(0, 180, 216, 0.2)", border: "1px solid rgba(0,180,216,0.25)" }}
              >
                <MapPin size={15} className="text-[#00B4D8]" />
              </div>
              <div>
                <p className="text-white text-sm" style={{ fontWeight: 600 }}>{store.city}</p>
                <p className="text-white/50 text-xs">{store.addr}</p>
              </div>
            </div>
          ))}
          <div className="h-px my-4" style={{ background: "rgba(255,255,255,0.08)" }} />
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(0, 180, 216, 0.2)", border: "1px solid rgba(0,180,216,0.25)" }}
            >
              <Clock size={15} className="text-[#00B4D8]" />
            </div>
            <div>
              <p className="text-white text-sm" style={{ fontWeight: 600 }}>Store Hours</p>
              <p className="text-white/50 text-xs">Mon – Sat: 9am – 8pm · Sun: 10am – 6pm</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(0, 180, 216, 0.2)", border: "1px solid rgba(0,180,216,0.25)" }}
            >
              <Phone size={15} className="text-[#00B4D8]" />
            </div>
            <div>
              <p className="text-white text-sm" style={{ fontWeight: 600 }}>Call Us</p>
              <p className="text-white/50 text-xs">+91 98765 43210</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="mt-5 w-full py-3 rounded-2xl text-white text-sm"
            style={{
              background: "linear-gradient(135deg, #0077B6, #00B4D8)",
              fontWeight: 700,
              letterSpacing: "0.02em",
              boxShadow: "0 4px 18px rgba(0,119,182,0.3)",
            }}
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────── */}
      <section className="px-5 pb-4">
        <div
          className="rounded-3xl p-6 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(0,119,182,0.28) 0%, rgba(0,180,216,0.18) 100%)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(0, 180, 216, 0.28)",
          }}
        >
          <span className="text-4xl">🐠</span>
          <h2
            className="text-white mt-3"
            style={{ fontSize: "1.3rem", fontWeight: 800 }}
          >
            Ready to dive in?
          </h2>
          <p className="text-white/50 text-sm mt-1 mb-5">
            Explore our full range of fish, equipment, and accessories.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="px-8 py-3.5 rounded-2xl text-white text-sm shadow-lg"
            style={{
              background: "linear-gradient(135deg, #0077B6, #00B4D8)",
              fontWeight: 700,
              letterSpacing: "0.04em",
              boxShadow: "0 6px 24px rgba(0,119,182,0.4)",
            }}
          >
            SHOP NOW →
          </button>
        </div>
      </section>

      <p className="text-center text-white/20 text-xs py-5" style={{ letterSpacing: "0.05em" }}>
        © 2025 MEHTAB AQUARIUM · UDHAMPUR &amp; JAMMU, J&K
      </p>
    </div>
  );
}