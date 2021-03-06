import "./App.css";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">

      <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="Home" exact component={Home} />
          {
          /* <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/products" exact component={Products} />
          <Route path="/details/:id" component={ProductDetails}/> */}
        </Switch>
        {/* <Footer/> */}
      </Router>


      </div>
    </>
  );
}

export default App;
