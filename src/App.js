import './App.css';
import Img from './assets/img.jpeg';
import Img1 from './assets/img1.jpeg';
import Img2 from './assets/img2.jpeg';
import Img3 from './assets/img3.jpeg';
import Img4 from './assets/img4.jpeg';
import Img5 from './assets/img5.jpeg';
import Img6 from './assets/img6.jpeg';
import Img7 from './assets/img7.jpeg';
import Img8 from './assets/img8.jpeg';
import Img9 from './assets/img9.jpeg';
import Img10 from './assets/img10.jpeg';
import Img0 from './assets/img0.jpeg';
import Img11 from './assets/img11.jpeg';
import Img12 from './assets/img12.jpeg';
import Slide from './assets/slide.jpeg';
import slide1 from './assets/slide1.jpeg';
import slide3 from './assets/slide3.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function App() {
  const Image = [Img, Img1, Img2, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img0, Img2, Img9, Img1, Img3, Img5, Img7]
  return (
    <div >
      <h1>Prime video</h1>
      <div className='container'>
        <ul>
          <li><h3>Home</h3></li>
          <li><h3>News</h3></li>
          <li><h3>Contact</h3></li>
          <li><h3 >About</h3></li>
        </ul>
      </div>
      <Carousel>
                <div>
                    <img src={Slide} />
                </div>
                <div>
                    <img src={slide1} />
                </div>
                <div>
                    <img src={slide3} />
                </div>
            </Carousel>

      <div >
      {Image.map(value => (
         <div className="img-disp">
          <img className='sub-img img-size' alt="images" src={value} />
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
