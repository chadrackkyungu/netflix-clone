import './Banner.css';
function Banner() {
  // this is a function that will cut if the string is more then 150 text
  function truncate(paragraph_Description, number) {
    return paragraph_Description?.length > number
      ? paragraph_Description.substr(0, number - 1) + '...'
      : paragraph_Description;
  }
  //   end
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
          {/* this is our func on top we pass him 2 param the string and the number */}
          {truncate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam adipisci neque dicta ipsam deleniti quos odit? Eum, nihil unde alias corporis officiis qui, voluptate quam ex necessitatibus animi culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusantium quae itaque illum deserunt ipsa repudiandae numquam laborum quaerat perferendis quisquam minima facere ratione dignissimos vitae, nihil obcaecati, eveniet id? .`,
            150 //this is the number
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;