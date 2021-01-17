import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"


function App() {
  return (

    //Handle routing to different page components
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
