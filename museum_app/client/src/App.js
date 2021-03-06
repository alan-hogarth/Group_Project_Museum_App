import { BrowserRouter as Router, Route } from "react-router-dom";
import FavouriteContainer from "./containers/FavouriteContainer";
import GalleryContainer from './containers/GalleryContainer';
import QuizContainer from './containers/QuizContainer';
import NavBar from "./components/NavBar";
import './css/style.css';

function App() {

  return (
    <Router>
      <NavBar /> 
      <Route exact path ="/" component={GalleryContainer} />
      <Route exact path ="/favourites" component={FavouriteContainer} />
      <Route exact path ="/quiz" component={QuizContainer} />
      <footer className="footer"><i>Images and associated content sourced using the API of the Rijksmuseum, Amsterdam.</i></footer>
    </Router>

  )
}

export default App;