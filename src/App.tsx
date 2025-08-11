import { Benefits } from "./components/benefits/Benefits";
import { ContactUs } from "./components/contact/ContactUs";
import { Footer } from "./components/footer/Footer";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/nav/Navbar";
import OurClasses from "./components/ourClasses/OurClasses";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <div className="app text-gray-500 bg-gray-50">
      <Navbar />
      <Home />
      <Benefits />
      <OurClasses />
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
