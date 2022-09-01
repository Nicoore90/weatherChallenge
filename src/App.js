import logo from './logo.svg';
import './App.css';
import { Header } from './components/header'
import { Main } from './components/main.jsx'
import { Weather } from './components/weather'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
