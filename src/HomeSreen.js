import './HomeScreen.css';
import Navbar from './Nav';
import Banner from './Banner';

function HomeSreen() {
  return (
    <div className="homeScreen">
      {/* Nav Bar */}
      <Navbar />

      {/* Banner  */}
      <Banner />
      {/* Row */}
    </div>
  );
}

export default HomeSreen;
