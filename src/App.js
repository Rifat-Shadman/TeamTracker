import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import ClubDetails from './Components/ClubDetails/ClubDetails';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <div>

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Team Tracker</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link exact href="/">Home</Nav.Link>
              <Nav.Link href="/details">Details</Nav.Link>
              <Nav.Link href="/details">
                    
                </Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Nav>
          </Navbar>
          <hr/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/club/:id">
              <ClubDetails></ClubDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
