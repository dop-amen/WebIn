import { useLocation, useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const pkg = location.state;

  if (!pkg) {
    return (
      <div className="p-6 text-center">
        <p>No package selected.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const priceNumber = parseFloat(pkg.price.replace("$", ""));
  const vat = +(priceNumber * 0.08).toFixed(2); // 8% VAT
  const total = +(priceNumber + vat).toFixed(2);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Highlighted package card */}
      <div className="p-6 bg-blue-50 rounded-2xl shadow-2xl border-4 border-blue-500 mb-6 transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-bold mb-2">{pkg.quality} Package</h2>
        <p className="text-2xl mb-2">
          Price: <strong>${priceNumber}</strong>
        </p>
        <p className="text-xl mb-2">
          VAT (8%): <strong>${vat}</strong>
        </p>
        <p className="text-2xl font-semibold">
          Total: <strong>${total}</strong>
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold text-lg mb-2">Included:</h2>
        {pkg.green.map((item, i) => (
          <p key={i} className="text-green-600">
            ✔ {item}
          </p>
        ))}
        {pkg.red.map((item, i) => (
          <p key={i} className="text-red-600">
            ✖ {item}
          </p>
        ))}
      </div>

      <button
        onClick={() => alert(`Proceeding to pay $${total} for ${pkg.quality}`)}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Pay Now
      </button>

      <button
        onClick={() => navigate(-1)} // Go back one step in history
        className="w-full mt-3 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400"
      >
        Cancel
      </button>
    </div>
  );
}
