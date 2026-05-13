import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import FilterSortControls from "./FilterSortControls";
import HogForm from "./HogForm";

function App() {
  const [hogList, setHogList] = useState(hogs);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [hiddenHogs, setHiddenHogs] = useState([]);

  function handleHideHog(name) {
    setHiddenHogs([...hiddenHogs, name]);
  }

  function handleAddHog(newHog) {
    setHogList([...hogList, newHog]);
  }

  const displayedHogs = hogList
    .filter((hog) => {
      if (showGreasedOnly) {
        return hog.greased;
      }
      return true;
    })
    .filter((hog) => !hiddenHogs.includes(hog.name))
    .sort((a, b) => {
  if (sortBy === "name") {
    return a.name.localeCompare(b.name);
  }

  if (sortBy === "weight") {
    return a.weight - b.weight;
  }

  return 0;
});

  return (
    <div className="App">
      <Nav />

      <FilterSortControls
        showGreasedOnly={showGreasedOnly}
        setShowGreasedOnly={setShowGreasedOnly}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <HogForm handleAddHog={handleAddHog} />

      <HogList hogs={displayedHogs} handleHideHog={handleHideHog} />
    </div>
  );
}

export default App;