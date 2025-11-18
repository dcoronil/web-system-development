import { useState } from "react";

const PRODUCTS = [
  { id: "p1", name: "Keyboard", price: 29.99 },
  { id: "p2", name: "Mouse", price: 14.5 },
  { id: "p3", name: "Headset", price: 39.0 },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart((prev) => [...prev, product]);
  const removeFromCart = (i) => setCart((prev) => prev.filter((_, idx) => idx !== i));
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const page = { fontFamily: "Arial, sans-serif", padding: 16, maxWidth: 640, margin: "0 auto" };

  return (
    <div style={page}>
      <h1>React Shopping Cart</h1>

      <section style={{ marginBottom: 24 }}>
        <h2>Products</h2>
        <ul style={{ paddingLeft: 16 }}>
          {PRODUCTS.map((p, i) => (
            <li key={p.id} style={{ marginBottom: 8 }}>
              <span>{p.name} — {p.price.toFixed(2)} €</span>
              <button
                data-testid={`add-${i}`}
                onClick={() => addToCart(p)}
                style={{ marginLeft: 8 }}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>(empty)</p>
        ) : (
          <ul style={{ paddingLeft: 16 }}>
            {cart.map((item, i) => (
              <li key={`${item.id}-${i}`} data-testid={`cart-item-${i}`} style={{ marginBottom: 8 }}>
                <span>{item.name} — {item.price.toFixed(2)} €</span>
                <button
                  data-testid={`remove-${i}`}
                  onClick={() => removeFromCart(i)}
                  style={{ marginLeft: 8 }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <p style={{ marginTop: 12 }}>
          Total: <strong data-testid="cart-total">{total.toFixed(2)}</strong> €
        </p>
      </section>
    </div>
  );
}
