import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import './App.css';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';


function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' element = { <MovieList/>} />
        <Route path='show/:showId' element = { <MovieDetails/>} />
      </Routes>
   </Router>
  );
}

export default App;
