import React from 'react'
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      {/* <h1>Hey there Motherfuckers</h1> */}
      {/* Nav */}
      {/* Banner */}
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS"
      isLargeRow
      
      fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrowMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;