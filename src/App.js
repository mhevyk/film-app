import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import GenreContextProvider from './context/GenreContext';

function App() {
  return (
    <>
      <GenreContextProvider>
        <Header />
        <Main />
      </GenreContextProvider>
      <Footer />
    </>
  );
}

export default App;
