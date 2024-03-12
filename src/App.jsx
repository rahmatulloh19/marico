import { Article, Content, Creator, Email, Expert, Footer, Header, Helped, Hero, Share } from "./components";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Creator />
        <Content />
        <Share />
        <Email />
        <Expert />
        <Helped />
        <Article />
      </main>
      <Footer />
    </>
  );
}

export default App;
