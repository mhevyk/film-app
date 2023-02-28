import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import GenreProvider from './context/GenreContext';

function App() {
  return (
    <>
      <GenreProvider>
        <Header />
        <Main />
      </GenreProvider>
      <Footer />
    </>
  );
}

export default App;
