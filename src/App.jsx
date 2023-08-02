import { Toaster } from 'react-hot-toast';
import { Navbar, Hero, Services, Works, About, Contact, Footer, StarsCanvas } from './components';

const App = () => (
  <div className="relative z-0 min-h-[100vh] bg-black-900 text-white">
    <div className="max-w-[1536px] mx-auto 2xl:px-0 lg:px-[60px] md:px-[40px] px-[20px]">
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <About />
      <Contact />
      <Footer />
    </div>

    <StarsCanvas />
    <Toaster />
  </div>
);

export default App;
