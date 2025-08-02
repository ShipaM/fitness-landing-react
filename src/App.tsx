import { Benefits } from "./components/benefits/Benefits";
import { ContactUs } from "./components/contact/ContactUs";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/nav/Navbar";
import OurClasses from "./components/ourClasses/OurClasses";

function App() {
  return (
    <div className="app text-gray-500 bg-gray-50">
      <Navbar />
      <Home />
      <Benefits />
      <OurClasses />
      <ContactUs />
    </div>
  );
}

export default App;
