import "./App.scss";

// COMPONENTS
import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
