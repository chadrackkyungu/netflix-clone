import './HomeScreen.css';
import Navbar from './Nav';
import Banner from './Banner';
import Row from './Row';
import requests from './Request';

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
    </div>
  );
}

export default HomeSreen;
