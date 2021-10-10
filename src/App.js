import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'index.css';

// App Components
import AppNavbar from 'components/AppNavbar';
import SearchOne from 'components/SearchOne';
import SearchTwo from 'components/SearchTwo';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppNavbar/>
          <Switch>
            <Route exact path="/search-one" component={SearchOne}/>
            <Route exact path="/search-two" component={SearchTwo}/> 
          </Switch>
        </BrowserRouter>
    </div>
  );
}