import React, { useState } from "react";

function Tutorial() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="each-tutorial">
      <h2>Tutorial</h2>
      <form
        action=""
        method="post"
        onSubmit={handleSubmit}
        className="main-form form-tutorial"
      >
        <div className="forms">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="title"
            className="col-1"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="forms">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="description"
            className="col-1"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>Status : </span> <span>Pending</span>
        </div>
        <div className="btns">
          <button type="submit" className="submit btn">
            Publish
          </button>
          <button type="submit" className="submit btn">
            Delete
          </button>
          <button type="submit" className="submit btn">
            Update
          </button>
        </div>
      </form>
    </section>
  );
}

export default Tutorial;
