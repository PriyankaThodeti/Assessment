import { useState } from "react";
import { sampleProducts } from "../data/sampleProducts";
import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
    const [products, setProducts] = useState(sampleProducts);;
    const [view, setView] = useState("list");

    


    return (
        <div className="container">

            <div className="top-bar">
                <div className="left-controls">
                    <h2>Product Management</h2>
                </div>
            </div>


            {view === "list" ? (
                <ProductList products={products} />
            ) : (
                <ProductCard products={products} />
            )}
        </div>
    );
}
