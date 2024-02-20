import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddToCart from './pages/AddToCart';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='wishlist' element={<Wishlist />} />
        <Route path='cart' element={<AddToCart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
