import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Tutorial from "./component/Tutorial";
import Tutoriallist from "./component/Tutoriallist";
import Add from "./component/add";
import Error from "./component/Error";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo col-1">Web App</div>
        <nav className="col-2">
          <li className="nav-item ">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </nav>
      </header>
      <section className="body-1">
        <Routes>
          <Route path="/" element={<Tutoriallist />} />
          <Route path="/tutorials" element={<Tutoriallist />} />
          <Route path="/add" element={<Add />} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
