import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SERVICES = [
  { id: 1, name: "Landing Page", price: 30 },
  { id: 2, name: "React Frontend", price: 60 },
  { id: 3, name: "Admin Dashboard", price: 45 },
  { id: 4, name: "SEO Setup", price: 25 },
  { id: 5, name: "Maintenance", price: 20 },
];

export default function CustomizeServices() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const toggle = (service) => {
    setSelected((prev) =>
      prev.some((s) => s.id === service.id)
        ? prev.filter((s) => s.id !== service.id)
        : [...prev, service]
    );
  };

  const total = selected.reduce((sum, s) => sum + s.price, 0);

  const checkout = () => {
    navigate("/checkout", {
      state: {
        category: "Custom Order",
        services: selected,
        price: `$${total}`,
      },
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Customize Your Order</h1>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {SERVICES.map((s) => {
          const active = selected.some((x) => x.id === s.id);

          return (
            <div
              key={s.id}
              onClick={() => toggle(s)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition
                ${active ? "border-green-500 bg-blue-50" : "border-gray-200"}
              `}
            >
                {active && (
    <span className="absolute top-3 right-3 text-green-600 text-xl font-bold">
      ✓
    </span>
  )}
              <h3 className="text-xl font-semibold">{s.name}</h3>
              <p className="text-lg">${s.price}</p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl">
        <span className="text-xl font-semibold">Total: ${total}</span>

        <button
          disabled={!selected.length}
          onClick={checkout}
          className="bg-green-500 text-white px-6 py-2 rounded disabled:opacity-50"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
