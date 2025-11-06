export default function ProductCard({ products }) {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <div className="card" key={p.id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <p>{p.category}</p>
          <p>Stock: {p.stock}</p>
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
}
