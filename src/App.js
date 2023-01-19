import Home from "./pages/Home";
import Header from "./global/Header";
import Footer from "./global/Footer";

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
