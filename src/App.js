import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/about" component={About} />
          <Route path= "/contact" component= {Contact} />
          <Route path="/" component={Home} />
          {/* <Route path="/" component={NotFound} /> */}

        </Switch>
      </Router>
    </div>
  );
};

export default App;
