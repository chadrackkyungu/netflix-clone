import './Banner.css';
function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }
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

        <h1 className="banner__description">
          {truncate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam adipisci neque dicta ipsam deleniti quos odit? Eum, nihil unde alias corporis officiis qui, voluptate quam ex necessitatibus animi culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusantium quae itaque illum deserunt ipsa repudiandae numquam laborum quaerat perferendis quisquam minima facere ratione dignissimos vitae, nihil obcaecati, eveniet id? .`,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
