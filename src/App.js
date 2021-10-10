import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'index.css';

// App Components
import AppNavbar from 'components/AppNavbar';
import SearchOne from 'components/SearchOne';

export default function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <SearchOne/>
    </div>
  );
}