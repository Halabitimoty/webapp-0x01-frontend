import React from "react";

function Tutoriallist() {
  return (
    <section className="Tutorial">
      <form action="">
        <input type="search" name="" id="" />
        <button type="submit" className="submit">
          Search
        </button>
      </form>
      <div className="tutorialBody">
        <div className="tutorial-list">
          <h2>Tutorials List</h2>
          <div className="TutorialData">Demo</div>
          <button type="submit" className="submit remove">
            Remove All
          </button>
        </div>
        <div className="tutorial-display">
          <h2>Tutorial</h2>
          <div>Demo</div>
        </div>
      </div>
    </section>
  );
}

export default Tutoriallist;
