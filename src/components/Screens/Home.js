import Carousel from "react-bootstrap/Carousel";
import img1 from "../../bannerwebsite2lg.jpg";

import img3 from "../../Banner1correctforsite.png";
import img4 from "../../banner2forsite.png";

function Home() {
  return (
    <div name="home">
      <Carousel  interval={1000} data-bs-theme="dark" className="mt-[3%] -z-10">
        <Carousel.Item>
          <img src={img1} alt="img1" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={img3} alt="img3" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img4} alt="img4" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
