import { useState } from "react";
import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import ToggleView from "../components/ToggleView";
import { sampleProducts } from "../data/sampleProducts";

export default function ProductPage() {
    const [products, setProducts] = useState(sampleProducts);
    const [filtered, setFiltered] = useState(products);
    const [view, setView] = useState("list");
    const [editProduct, setEditProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [page, setPage] = useState(1);
    const perPage = view === "list" ? 10 : 12;

    const handleSave = (product) => {
        if (editProduct) {
            setProducts(products.map((p) => (p.id === product.id ? product : p)));
            setEditProduct(null);
        } else {
            setProducts([...products, { ...product, id: Date.now() }]);
        }
        setShowModal(false);
    };

    const handleSearch = (query) => {
        if (!query) setFiltered(products);
        else setFiltered(products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())));
    };

    const handleEdit = (product) => {
        setEditProduct(product);
        setShowModal(true);
    };

    const handleAdd = () => {
        setEditProduct(null);
        setShowModal(true);
    };

    const paginated = filtered.slice((page - 1) * perPage, page * perPage);

    return (
        <div className="container">

            <div className="top-bar">
                <div className="left-controls">
                    <h2>Product Management</h2>
                </div>
                <div className="right-controls">
                    <ToggleView view={view} setView={setView} />
                    <SearchBar onSearch={handleSearch} />
                    <button onClick={handleAdd} className="add-btn">Add Product</button>
                </div>
            </div>


            {view === "list" ? (
                <ProductList products={paginated} onEdit={handleEdit} />
            ) : (
                <ProductCard products={paginated} onEdit={handleEdit} />
            )}

            <Pagination
                currentPage={page}
                totalPages={Math.ceil(filtered.length / perPage)}
                onPageChange={setPage}
                totalItems={filtered.length}
                perPage={perPage}
            />

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
