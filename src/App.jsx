import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RedirectHandler from "./RedirectHandler";
import Home from "./Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<RedirectHandler />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
