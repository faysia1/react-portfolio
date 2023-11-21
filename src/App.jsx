import './App.css'
import { BrowserRouter as Router,} from 'react-router-dom';
import Header from './components/Header';
// import AboutMe from './components/AboutMe';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        {/* <Switch>
          <Route path="/about" component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch> */
        <Footer /> }
      </div>
    </Router>
  );
};

export default App;