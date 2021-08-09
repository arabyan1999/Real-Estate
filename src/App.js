import Home from "./container/Home"
import { BrowserRouter as Router } from "react-router-dom"
import Header from "./container/Header";

function App() {
  return (
    <div >
      <Router>
        <Header />
        <div style={{ scrollBehavior: "smooth" }}>
          <Home />
        </div>
      </Router>
    </div>
  );
}

export default App;
