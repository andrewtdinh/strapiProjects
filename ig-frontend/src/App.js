import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <h2>App</h2>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
