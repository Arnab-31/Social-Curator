import './App.css';
import Loginscreen from './Components/LoginScreen/LoginScreen';
import Uploadscreen from './Components/Uploadscreen/Uploadscreen';
import Contentscreen from './Components/ContentScreen/ContentScreen';
import Postscreen from './Components/PostScreen/PostScreen';
import {BrowserRouter as Router, Switch, Route} from  "react-router-dom";


import Homescreen
 from './Components/Homesreen/Homescreen';
function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Router>
          <Switch>
              <Route path="/login">
                <Loginscreen />
              </Route>
              <Route path="/upload">
                <Uploadscreen />
              </Route>
              <Route path="/content">
                <Contentscreen />
              </Route>
              <Route path="/post">
                <Postscreen />
              </Route>
              <Route path="/">
                <Homescreen />
              </Route>
          </Switch>
        </Router>
      
        
      </div>
    </div>
  );
}

export default App;
