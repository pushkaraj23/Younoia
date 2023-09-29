import './App.css';
import Home from './Home/Home.jsx';
import Nav from './Nav/Nav.jsx';
import Counter from './Counter/Counter.jsx';
import FeatureComp from './FeatureComp/featurecomp.jsx';
function App() {
  return (
    <div className="App">
      <div className="nav"><Nav /></div>
      
      <Home />
      <Counter/>
      <FeatureComp/>
    </div>
  );
}

export default App;
