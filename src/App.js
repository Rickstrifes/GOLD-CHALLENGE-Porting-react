import { RouterProvider } from "react-router-dom";
import { router } from './config/Router';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
    <Navigation />
    <RouterProvider router={router} />
    <Footer />
    </div>
  );
}

export default App;