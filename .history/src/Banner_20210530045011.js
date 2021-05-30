import './Banner.css';
function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://www.ivacy.com/blog/wp-content/uploads/2015/07/Blog-banner-Movies-and-TV-Shows-coming-Going-on-Netflix-Banner.jpg)`,
        backgroundPosition: 'center',
      }}
    ></header>
  );
}

export default Banner;
