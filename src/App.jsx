import Header from "./components/header/Header";
import Section from "./components/section/Section";
import Cards from "./components/cards/Cards";
import "./App.css";
import Keyboard from "./components/keyboard/Keyboard";
import Main from "./components/main/Main";
import Deals from "./components/deals/Deals";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Section />
      <Cards />
      <Keyboard />
      <Main />
      <Deals />
      <Footer />
    </>
  );
}

export default App;
