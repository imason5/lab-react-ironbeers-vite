import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <Link
        className="home-card"
        to="/beers"
        style={{
          backgroundImage: `url('../../public/assets/beers.png')`,
        }}
      >
        <h2>All Beers</h2>
      </Link>
      <Link
        className="home-card"
        to="/random-beer"
        style={{
          backgroundImage: `url('../../public/assets/random-beer.png')`,
        }}
      >
        <h2>Random Beer</h2>
      </Link>
      <Link
        className="home-card"
        to="/new-beer"
        style={{
          backgroundImage: `url('../../public/assets/new-beer.png')`,
        }}
      >
        <h2>New Beer</h2>
      </Link>
    </div>
  );
};

export default HomePage;
