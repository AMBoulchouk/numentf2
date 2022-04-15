import './App.css';
import Banner from './banner/Banner';
import Header from './header/Header';
import ProductSection from './product-section/ProductSection';
import ContactSection from './contact-section/ContactSection';
function App() {
  return (
    <div className="App">
      <Banner/>
      <Header/>
      <ProductSection/> 
      <ContactSection/> 
    </div>
  );
}

export default App;
