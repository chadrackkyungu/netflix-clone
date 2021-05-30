import './HomeScreen.css';
import Navbar from './Nav';
import Banner from './Banner';
import Row from './Row';

function HomeSreen() {
  return (
    <div className="homeScreen">
      {/* Nav Bar */}
      <Navbar />

      {/* Banner  */}
      <Banner />
      {/* Row */}

      <Row />
    </div>
  );
}

export default HomeSreen;
