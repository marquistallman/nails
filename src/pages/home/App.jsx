import "./styles/App.css";
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/Team';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Team />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
