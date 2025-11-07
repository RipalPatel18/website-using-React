
//Importing files from components
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import Hero from "./components/Hero.jsx";
import Featured from "./components/Featured.jsx";
import Footer from "./components/Footer.jsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Hero />
      <main>
        <Featured />
      </main>
      <Footer />
    </div>
  );
}

