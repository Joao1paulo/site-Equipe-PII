import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Technologies from './components/Technologies';
import Project from './components/Project';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <Technologies />
        <Project />
      </main>
      <Footer />
    </>
  );
}
