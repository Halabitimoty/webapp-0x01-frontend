import React, { useState } from "react";
import crud from "../services/tutorial";

function Add() {
  const [tutorialData, settutorialData] = useState({
    id: null,
    title: "",
    description: "",
    published: false,
    submitted: false,
  });

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const saveTutorial = (event) => {
    event.preventDefault();
    let data = { title: formData.title, description: formData.description };

    crud
      .create(data)
      .then((res) => {
        console.log(res);
        settutorialData({
          id: res.data.id,
          title: res.data.title,
          description: res.data.description,
          published: res.data.published,
          submitted: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const newTutorial = () => {
    settutorialData({
      id: null,
      title: "",
      description: "",
      published: false,
      submitted: false,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="Add">
      {tutorialData.submitted ? (
        <div className="main-form">
          <h2>You submitted successfully!</h2>
          <button type="submit" onClick={newTutorial} className="submit">
            Add
          </button>
        </div>
      ) : (
        <form className="main-form" method="post">
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
          <button
            type="submit"
            onClick={() => {
              saveTutorial();
            }}
            className="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Add;
