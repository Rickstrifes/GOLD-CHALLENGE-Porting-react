import { BrowserRouter } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import { router } from './config/Router';
import { Route } from "react-router-dom";
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Ourservices from './Components/Ourservices';
import Whyus from './Components/Whyus';
import Testimoni from './Components/Testimoni';
import Faqaccordion from './Components/Faqaccordion';

function App() {
  return (
    <BrowserRouter>
      <RouterProvider router={router}>
        <Navigation />
        <Route exact path="/" component={Hero} />
        <Route path="/ourservices" component={Ourservices} />
        <Route path="/whyus" component={Whyus} />
        <Route path="/testimoni" component={Testimoni} />
        <Route path="/faqaccordion" component={Faqaccordion} />
        <Footer />
      </RouterProvider>
    </BrowserRouter>
  );
}

export default App;
