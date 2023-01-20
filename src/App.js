import Home from "./pages/Home";
import Header from "./global/Header";
import Footer from "./global/Footer";
import { useEffect } from "react";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
