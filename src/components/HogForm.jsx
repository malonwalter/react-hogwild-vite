import React, { useState } from "react";

function HogForm({ handleAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    weight: "",
    greased: false,
    medal: "",
    image: "",
  });

  function handleChange(e) {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox"
        ? checked
        : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newHog = {
      name: formData.name,
      specialty: formData.specialty,
      weight: Number(formData.weight),
      greased: formData.greased,
      "highest medal achieved": formData.medal,
      image: formData.image,
    };

    handleAddHog(newHog);

    setFormData({
      name: "",
      specialty: "",
      weight: "",
      greased: false,
      medal: "",
      image: "",
    });
  }

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name:</label>

        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="specialty">
          Specialty:
        </label>

        <input
          id="specialty"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="weight">
          Weight:
        </label>

        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="greasedCheck">
          Greased?
        </label>

        <input
          type="checkbox"
          id="greasedCheck"
          name="greased"
          checked={formData.greased}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="medal">
          Highest Medal:
        </label>

        <input
          id="medal"
          name="medal"
          value={formData.medal}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="image">
          Image URL:
        </label>

        <input
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>

      <button className="ui button primary">
        Add Hog
      </button>
    </form>
  );
}

export default HogForm;