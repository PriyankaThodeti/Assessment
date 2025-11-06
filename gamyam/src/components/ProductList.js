export default function ProductList({ products }) {
    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Name</th><th>Price</th><th>Description</th><th>Category</th><th>Stock</th><th></th>
                </tr>
            </thead>
            <tbody>
                {products.map((p) => (
                    <tr key={p.id}>
                        <td>{p.name}</td>
                        <td>₹{p.price}</td>
                        <td>{p.description}</td>
                        <td>{p.category}</td>
                        <td>{p.stock}</td>
                        <td><button >Edit</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
