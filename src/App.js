import React from 'react';
import './App.css';
import { MovieProvider } from './movieContext';
import MovieList from "./movieList"
import Nav from "./nav";
import AddMovie from "./addMovie"

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
