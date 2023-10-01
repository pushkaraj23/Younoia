import './App.css';
import Home from './Home/Home.jsx';
import Nav from './Nav/Nav.jsx';
import Counter from './Counter/Counter.jsx';
import Therapists from './Therapists/Therapists.jsx';
import About from './about/About.jsx';
import FeatureComp from './FeatureComp/featurecomp.jsx';
import FAQ from './FAQ/faq.jsx'
import Review from './Review/Review.jsx';

function App() {
  return (
    <div className="App">
      <div className="nav"><Nav /></div>
      
      <Home />
      <Counter/>
      <Therapists />
      <About />
      <FeatureComp />
      <Review />
      <FAQ/>

    </div>
  );
}

export default App;
