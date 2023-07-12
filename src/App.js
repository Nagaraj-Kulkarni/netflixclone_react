import logo from './logo.svg';
import './App.css';
import NetflixOriginals from './NetflixOriginals';
import TrendingNow from './TrendingNow';
import ActionMovies from './ActionMovies';
import HorrorMovies from './HorrorMovies';
import Navbar from './Navbar';
import Main from './Main';

function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <NetflixOriginals/>
      <TrendingNow/>
      <ActionMovies/>
      <HorrorMovies/>
    </div>
  );
}

export default App;
