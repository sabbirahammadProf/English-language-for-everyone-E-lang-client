import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Affiliate from './components/Affiliate/Affiliate';

function App() {
  return (
    <div className='main'>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route path="/affiliate">
            <Affiliate></Affiliate>
          </Route>
          <Router>
            <NotFound></NotFound>
          </Router>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
