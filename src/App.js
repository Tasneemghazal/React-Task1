import logo from './logo.svg';
import './App.css';
import Products from './components/products/Products.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
function App() {
  return (
    <>
    <Navbar/>
    <Products/>
    <Footer/>
    </>
  );
}

export default App;
