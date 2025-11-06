export default function ProductCard({ products, onEdit }) {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <div className="card" key={p.id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <p>{p.category}</p>
          <p>Stock: {p.stock}</p>
          <button onClick={() => onEdit(p)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
