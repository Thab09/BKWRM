import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">Hello world</header>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
