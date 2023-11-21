import { BrowserRouter, Routes , Route} from "react-router-dom"
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <div className="pages">
              <Routes>
                  <Route 
                    path="/dashboard"
                    element = {<Dashboard />}
                  />
                  <Route 
                    path = "/income"
                    element = {<Income />}
                  />
                  <Route 
                    path = "/expense"
                    element = {<Expense />}
                  />
              </Routes>
          </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
