import Row from './Row';
import requests from './requests';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
    
      <Banner endpoints={requests.fetchTrending} />
      <Row 
        endpoints={requests.fetchNetflixOriginals} 
        heading='Netflix Originals'
        isBigger = {true}
      />
      <Row 
        endpoints={requests.fetchTrending} 
        heading='Trending Now'
      />
      <Row 
        endpoints={requests.fetchTopRated} 
        heading='Top Rated'
      />
      <Row 
        endpoints={requests.fetchActionMovies} 
        heading='Action Movies'
      />
      <Row 
        endpoints={requests.fetchComedyMovies} 
        heading='Comedy Movies'
      />
      <Row 
        endpoints={requests.fetchHorrorMovies} 
        heading='Horror Movies'
      />
      <Row 
        endpoints={requests.fetchRomanceMovies} 
        heading='Romance Movies'
      />
      <Row 
        endpoints={requests.fetchDocumentaries} 
        heading='Documentaries'
      />

    </div>
  );
}

export default App;
