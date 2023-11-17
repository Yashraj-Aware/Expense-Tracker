import { BrowserRouter, Routes , Route} from "react-router-dom"
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <div className="pages">
              <Routes>
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
