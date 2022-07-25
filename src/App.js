import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Navibar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <header className="App">
        <Navibar className="App" />
        <Header className="App"/>
      </header>

      <Main />
      <Footer />

    </div>
  )
}

export default App;