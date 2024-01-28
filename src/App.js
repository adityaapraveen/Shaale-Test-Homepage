import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import { CarouselDemo } from './components/CarouselDemo';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <CarouselDemo />
    </div>
  );
}

export default App;
