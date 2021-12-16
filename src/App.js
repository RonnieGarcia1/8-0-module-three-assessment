import "./App.css";
import Home from './components/Home';
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
        <Router>
            <nav>
                <Link to="/"><img src={"https://mir-s3-cdn-cf.behance.net/project_modules/disp/4809e723428951.5632324de6064.jpg"} alt="ghibli icon"/></Link>
                <Link to="/">Home</Link>
                <Link to="/movies"><a href="/movies">Movies</a></Link>
                <Link to="/people"><a href="/people">People</a></Link>
                <Link to="/locations"><a href="/locations">Locations</a></Link>
            </nav>

          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/Movies/" component={Movies}/>
              <Route path="/People/" component={People}/>
              <Route path="/Locations/" component={Locations}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;