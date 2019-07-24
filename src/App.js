import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './Components/Navbar';
import MovieDetailPage from './Pages/MovieDetailPage';
import MovieListPage from './Pages/MovieListPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={MovieListPage} />
        <Route path="/movie/:id" component={MovieDetailPage} />
      </Router>
    </div>
  );
}

export default App;
