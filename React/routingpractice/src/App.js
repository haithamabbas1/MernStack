import Home from './components/Home';
import {Router} from '@reach/router';
import Number from './components/Number';
import Colors from './components/Colors';

function App() {
  return (
    <div className="App">
    <Router>
        <Home path='/home'/>
        <Number path='/:num' />
        <Colors path='/:str/:color/:back' />
      </Router>
    </div>
  );
}

export default App