import { Benefits } from "./components/benefits/Benefits";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/nav/Navbar";

function App() {
  return (
    <div className="app text-gray-500 bg-gray-50">
      <Navbar />
      <Home />
      <Benefits />
    </div>
  );
}

export default App;
