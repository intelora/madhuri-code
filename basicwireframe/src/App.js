import Header from './components/Header';
import Footer from './components/Footer';
import MenuBar from './components/MenuBar';
import Container from './components/container/Conatiner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <MenuBar/>
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
