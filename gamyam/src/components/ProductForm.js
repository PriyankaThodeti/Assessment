import { useState, useEffect } from "react";

export default function ProductForm({ onSave, editProduct, onCancel }) {
  const [form, setForm] = useState({ name: "", price: "", category: "", stock: "", description: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editProduct) setForm(editProduct);
    else setForm({ name: "", price: "", category: "", stock: "", description: "" });
  }, [editProduct]);

  const validate = () => {
    let err = {};
    if (!form.name) err.name = "Name is required";
    if (!form.price) err.price = "Price is required";
    if (!form.category) err.category = "Category is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }
    onSave(form);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      {errors.price && <p className="error">{errors.price}</p>}

      <input
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      {errors.category && <p className="error">{errors.category}</p>}

      <input
        type="number"
        placeholder="Stock"
        value={form.stock}
        onChange={(e) => setForm({ ...form, stock: e.target.value })}
      />

      <textarea
        placeholder="Description (optional)"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <div className="form-buttons">
        <button type="submit" className="primary-btn">
          {editProduct ? "Update" : "Add"} Product
        </button>
        <button type="button" className="cancel-btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
