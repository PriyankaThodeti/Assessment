export default function ToggleView({ view, setView }) {
  return (
    <div className="toggle-switch">
      <label className="switch">
        <input
          type="checkbox"
          checked={view === "card"}
          onChange={() => setView(view === "list" ? "card" : "list")}
        />
        <span className="slider"></span>
      </label>
      <span>{view === "list" ? "List View" : "Grid View"}</span>
    </div>
  );
}
