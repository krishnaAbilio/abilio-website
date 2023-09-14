
import './App.css';
import Aboutus from './components/Aboutus';
import Client from './components/Client';
import Courses from './components/Courses';
import { Footer } from './components/Footer';
import Header from './components/Header';
import Information from './components/Information';
import Login from './components/Login';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <Courses />
      <Aboutus />
      <Testimonials />
      <Client />
      <Information />
      <Footer />
      {/* <Login/> */}

    </div>

  );
}

export default App;
