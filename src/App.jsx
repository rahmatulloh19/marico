import { Article, Content, Creator, Email, Expert, Footer, Header, Helped, Hero, Share } from "./components";

function App() {
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
