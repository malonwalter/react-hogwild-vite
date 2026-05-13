import React from "react";

function FilterSortControls({
  showGreasedOnly,
  setShowGreasedOnly,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="ui form" style={{ margin: "20px" }}>
      <div className="field">
        <input
          type="checkbox"
          id="greased"
          checked={showGreasedOnly}
          onChange={(e) => setShowGreasedOnly(e.target.checked)}
        />

        <label htmlFor="greased">
          Greased Pigs Only?
        </label>
      </div>

      <div className="field">
        <label htmlFor="sort">
          Sort by:
        </label>

        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSortControls;