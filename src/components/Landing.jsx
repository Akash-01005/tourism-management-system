import back1 from "../assets/back1.jpg";
import back2 from "../assets/back2.jpg";
import back3 from "../assets/back3.jpg";

const Carousel = () => {
  return (
    <>
    <div className="carousel-cotainer">
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={back3} className="d-block w-100" height="515px" alt="First slide" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={back2} className="d-block w-100" height="515px" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src={back1} className="d-block w-100" height="515px" alt="Third slide" />
        </div>
      </div>
      <div className="content text-black">
        <h1>Discover Your Next Adventure</h1>
        <p>Explore the world with personalized itineraries and AI-powered recommendations.</p>
        <button className="btn btn-dark">Start Planning</button>
      </div>
    </div>

    </div>
    </>
   
  );
};

export default Carousel;
