import { Navbar, Hero, Services, Works, About, Contact, Footer, StarsCanvas } from './components';

const App = () => (
  <div className="relative z-0 min-h-[100vh] bg-black-900 text-white">
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <About />
      <Contact />
      <Footer />
    </div>

    <StarsCanvas />
  </div>
);

export default App;
