import { ArrowLeft, MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram, Facebook } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";

export function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const glassPanelStyle: React.CSSProperties = {
    background: "rgba(0, 119, 182, 0.1)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(0, 180, 216, 0.18)",
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(0, 180, 216, 0.2)",
    color: "white",
    outline: "none",
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020E1A] pb-24">

      {/* Hero Header */}
      <div
        className="relative px-5 pt-14 pb-8 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0077B6 0%, #023E8A 60%, #020E1A 100%)" }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #00B4D8 0%, transparent 50%)" }}
        />
        <button
          onClick={() => navigate(-1)}
          className="relative z-10 mb-6 flex items-center gap-2"
          style={{
            ...glassPanelStyle,
            display: "inline-flex",
            padding: "8px 16px",
            borderRadius: 999,
          }}
        >
          <ArrowLeft size={16} className="text-white" />
          <span className="text-white text-sm">Back</span>
        </button>
        <h1 className="relative z-10 text-white text-3xl leading-tight">Get in Touch</h1>
        <p className="relative z-10 text-white/60 text-sm mt-2">
          We'd love to hear from you. Reach out for custom builds, fish queries, or anything aquatic.
        </p>
      </div>

      <div className="px-5 space-y-5 mt-2">

        {/* Contact Cards */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Phone, label: "Call Us", value: "+91 98765 43210", sub: "Mon–Sat 9am–8pm" },
            { icon: Mail, label: "Email Us", value: "hello@mehtabaquarium.in", sub: "Reply within 24h" },
          ].map(item => (
            <div key={item.label} className="rounded-2xl p-4" style={glassPanelStyle}>
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ background: "rgba(0, 180, 216, 0.2)" }}
              >
                <item.icon size={16} className="text-[#00B4D8]" />
              </div>
              <p className="text-[#00B4D8] text-xs font-semibold">{item.label}</p>
              <p className="text-white text-xs mt-0.5 break-all">{item.value}</p>
              <p className="text-white/40 text-[10px] mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Locations */}
        <div className="rounded-2xl p-5" style={glassPanelStyle}>
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={16} className="text-[#00B4D8]" />
            <p className="text-white text-sm font-semibold">Our Locations</p>
          </div>
          {[
            {
              city: "Udhampur Store",
              addr: "Main Bazaar, Near Clock Tower,\nUdhampur – 182101, J&K",
              hours: "Mon–Sat: 9am–8pm · Sun: 10am–6pm",
            },
            {
              city: "Jammu Store",
              addr: "Gandhi Nagar, Opposite City Park,\nJammu – 180001, J&K",
              hours: "Mon–Sat: 9am–8pm · Sun: 10am–6pm",
            },
          ].map((store, i) => (
            <div key={store.city}>
              {i > 0 && <div className="h-px bg-white/10 my-4" />}
              <div className="flex gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                  style={{ background: "#00B4D8" }}
                />
                <div>
                  <p className="text-white text-sm font-semibold">{store.city}</p>
                  <p className="text-white/50 text-xs leading-relaxed mt-0.5 whitespace-pre-line">{store.addr}</p>
                  <div className="flex items-center gap-1 mt-1.5">
                    <Clock size={10} className="text-[#00B4D8]" />
                    <p className="text-white/40 text-[10px]">{store.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl p-5" style={glassPanelStyle}>
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle size={16} className="text-[#00B4D8]" />
            <p className="text-white text-sm font-semibold">Send Us a Message</p>
          </div>

          {sent ? (
            <div className="flex flex-col items-center py-8 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ background: "rgba(0, 180, 216, 0.2)" }}
              >
                <Send size={28} className="text-[#00B4D8]" />
              </div>
              <p className="text-white font-semibold">Message Sent!</p>
              <p className="text-white/50 text-sm mt-1">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {[
                { key: "name", label: "Your Name", type: "text", placeholder: "Arjun Mehta" },
                { key: "email", label: "Email Address", type: "email", placeholder: "arjun@email.com" },
                { key: "phone", label: "Phone (optional)", type: "tel", placeholder: "+91 9876543210" },
              ].map(field => (
                <div key={field.key}>
                  <label className="text-white/60 text-xs block mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm placeholder:text-white/30"
                    style={inputStyle}
                    required={field.key !== "phone"}
                  />
                </div>
              ))}
              <div>
                <label className="text-white/60 text-xs block mb-1">Message</label>
                <textarea
                  placeholder="Tell us about your aquarium needs..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm placeholder:text-white/30 resize-none"
                  style={inputStyle}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl text-white font-semibold text-sm flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(135deg, #0077B6, #00B4D8)" }}
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Social */}
        <div className="rounded-2xl p-5" style={glassPanelStyle}>
          <p className="text-white text-sm font-semibold mb-3">Follow Us</p>
          <div className="flex gap-3">
            {[
              { icon: Instagram, label: "@mehtabaquarium", color: "#E1306C" },
              { icon: Facebook, label: "Mehtab Aquarium", color: "#1877F2" },
            ].map(social => (
              <div
                key={social.label}
                className="flex-1 flex items-center gap-2 p-3 rounded-xl"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <social.icon size={18} style={{ color: social.color }} />
                <span className="text-white/60 text-xs">{social.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <p className="text-center text-white/20 text-xs py-8">
        © 2025 Mehtab Aquarium · J&K, India
      </p>
    </div>
  );
}
