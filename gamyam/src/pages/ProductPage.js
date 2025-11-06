import { useState } from "react";
import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import { sampleProducts } from "../data/sampleProducts";

export default function ProductPage() {
    const [products, setProducts] = useState(sampleProducts);;
    const [view, setView] = useState("list");
    const [editProduct, setEditProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleEdit = (product) => {
        setEditProduct(product);
        setShowModal(true);
    };

    const handleSave = (product) => {
        if (editProduct) {
            setProducts(products.map((p) => (p.id === product.id ? product : p)));
            setEditProduct(null);
        } else {
            setProducts([...products, { ...product, id: Date.now() }]);
        }
        setShowModal(false);
    };


    return (
        <div className="container">

            <div className="top-bar">
                <div className="left-controls">
                    <h2>Product Management</h2>
                </div>
            </div>


            {view === "list" ? (
                <ProductList products={products} onEdit={handleEdit} />
            ) : (
                <ProductCard products={products} onEdit={handleEdit} />
            )}

            {/* 🧩 Modal */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>{editProduct ? "Edit Product" : "Add Product"}</h3>
                        <ProductForm
                            onSave={handleSave}
                            editProduct={editProduct}
                            onCancel={() => setShowModal(false)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
