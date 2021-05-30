import './Banner.css';
function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://www.innerloc.com/wp-content/uploads/2017/03/bigstock-122084477.jpg")`,
        backgroundPosition: 'center',
        backgroundColor: '#92ddff',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>

        <div className="banner__buttons">
          <button className="banner__button">Paly</button>
          <button className="banner__button">My list</button>
        </div>

        <h1 className="banner__description">This is a test description</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
