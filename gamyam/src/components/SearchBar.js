import { useState, useEffect } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch(query);
    }, 500);
    return () => clearTimeout(delay);
  }, [query, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="search-input"
    />
  );
}
