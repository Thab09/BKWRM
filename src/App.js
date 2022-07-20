import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.scss";

import Home from "./pages/Home";
import Library from "./pages/Library";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Reading from "./pages/Bookshelf/Reading";
import PlanToRead from "./pages/Bookshelf/PlanToRead";
import Dropped from "./pages/Bookshelf/Dropped";
import Completed from "./pages/Bookshelf/Completed";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bookshelf/reading" element={<Reading />} />
            <Route path="/bookshelf/plantoread" element={<PlanToRead />} />
            <Route path="/bookshelf/dropped" element={<Dropped />} />
            <Route path="/bookshelf/completed" element={<Completed />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
