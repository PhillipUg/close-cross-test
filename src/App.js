import './assets/styles/App.css';
import Navbar from './components/Navbar';
import Explore from './components/pages/explore/Explore';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Explore />
    </div>
  );
}

export default App;
