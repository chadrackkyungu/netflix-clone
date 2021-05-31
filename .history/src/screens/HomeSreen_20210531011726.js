import '../screens/HomeScreen.css';
import Navbar from '../Nav';
import Banner from '../Banner';
import Row from '../Row';
import requests from '../Request';

function HomeSreen() {
  return (
    <div className="homeScreen">
      {/* Nav Bar */}
      <Navbar />

      {/* Banner  */}
      <Banner />
      {/* Row */}

      <Row
        title="NEXTFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginials}
        isLargeRow
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaies} />
    </div>
  );
}

export default HomeSreen;
