import logo from './logo.svg';
import './App.css';
import destination2 from './assets/destination-2.jpg'
import destination1 from './assets/destination-1.jpg'
import destination3 from './assets/destination-3.jpg'
import destination4 from './assets/destination-4.jpg'
import gallery1 from './assets/gallery-1.jpg'
import gallery2 from './assets/gallery-2.jpg'
import gallery3 from './assets/gallery-3.jpg'
import story from './assets/story.jpg'
import trip1 from './assets/trip-1.jpg'
import trip2 from './assets/trip-2.jpg'
import trip3 from './assets/trip-3.jpg'
import header1 from './assets/header-1.jpg'
import header2 from './assets/header-2.jpg'
function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="App.css" />
        <title>Devlok</title>
      </head>
      <body>
        <nav>
          <div className="nav__logo">Devlok<span>.</span></div>
          <ul className="nav__links">
            <li className="link"><a href="#">Home</a></li>
            <li className="link"><a href="#">Char Dham</a></li>
            <li className="link"><a href="#">Taxi</a></li>
            <li className="link"><a href="#">Reviews</a></li>
          </ul>
          <button className="btn">Contact Us</button>
        </nav>
        <header>
          <div className="section__container header__container">
            <div className="header__image">
              <img src={header1} alt="header" />
              <img src={header2} alt="header" />
            </div>
            <div className="header__content">
              <div>
                <p className="sub__header">Book Now</p>
                <h1>The Smiling 😊<br />agent for travel</h1>
                <p className="section__subtitle">
                  Make your travel more enjoyable with us. We are the best travel
                  agency and we are providing the best travel services for our
                  clients.
                </p>
                <div className="action__btns">
                  <button className="btn">Plan a Trip</button>
                  <div className="story">
                    <div className="video__image">
                      <img src={story} alt="story" />
                      <span><i className="ri-play-fill"></i></span>
                    </div>
                    <span>Watch our story</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="section__container destination__container">
          <div className="section__header">
            <div>
              <h2 className="section__title">Explore top destinations</h2>
              <p className="section__subtitle">
                Explore your suitable and dream places around the world. Here you
                can find your right destination.
              </p>
            </div>
            <div className="destination__nav">
              <span><i className="ri-arrow-left-s-line"></i></span>
              <span><i className="ri-arrow-right-s-line"></i></span>
            </div>
          </div>
          <div className="destination__grid">
            <div className="destination__card">
              <img src={destination4} alt="destination" />
              <div className="destination__details">
                <p className="destination__title">Banff</p>
                <p className="destination__subtitle">Canada</p>
              </div>
            </div>
            <div className="destination__card">
              <img src={destination2} alt="destination" />
              <div className="destination__details">
                <p className="destination__title">Machu Picchu</p>
                <p className="destination__subtitle">Peru</p>
              </div>
            </div>
            <div className="destination__card">
              <img src={destination3} alt="destination" />
              <div className="destination__details">
                <p className="destination__title">Lauterbrunnen</p>
                <p className="destination__subtitle">Switzerland</p>
              </div>
            </div>
            <div className="destination__card">
              <img src={destination4} alt="destination" />
              <div className="destination__details">
                <p className="destination__title">Zhangjiajie</p>
                <p className="destination__subtitle">China</p>
              </div>
            </div>
          </div>
        </section>

        <section className="trip">
          <div className="section__container trip__container">
            <h2 className="section__title">Best trip package</h2>
            <p className="section__subtitle">
              Explore your suitable and dream places around the world. Here you can
              find your right destination.
            </p>
            <div className="trip__grid">
              <div className="trip__card">
                <img src={trip1} alt="trip" />
                <div className="trip__details">
                  <p>Wasserwerk Frelberg, Germany</p>
                  <div className="rating"><i className="ri-star-fill"></i> 4.2</div>
                  <div className="booking__price">
                    <div className="price"><span>From</span> $300</div>
                    <button className="book__now">Book Now</button>
                  </div>
                </div>
              </div>
              <div className="trip__card">
                <img src={trip2} alt="trip" />
                <div className="trip__details">
                  <p>Patagonia, Argentina and Chile</p>
                  <div className="rating"><i className="ri-star-fill"></i> 4.5</div>
                  <div className="booking__price">
                    <div className="price"><span>From</span> $450</div>
                    <button className="book__now">Book Now</button>
                  </div>
                </div>
              </div>
              <div className="trip__card">
                <img src={trip3} alt="trip" />
                <div className="trip__details">
                  <p>The Dolomites, Italy</p>
                  <div className="rating"><i className="ri-star-fill"></i> 4.7</div>
                  <div className="booking__price">
                    <div className="price"><span>From</span> $400</div>
                    <button className="book__now">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="view__all">
              <button className="btn">View All</button>
            </div>
          </div>
        </section>

        <section className="gallary">
          <div className="section__container gallary__container">
            <div className="image__gallary">
              <div className="gallary__col">
                <img src={gallery1} alt="gallary" />
              </div>
              <div className="gallary__col">
                <img src={gallery2} alt="gallary" />
                <img src={gallery3} alt="gallary" />
              </div>
            </div>
            <div className="gallary__content">
              <div>
                <h2 className="section__title">
                  Our trip gallary that will inspire you
                </h2>
                <p className="section__subtitle">
                  Explore your suitable and dream places around the world. Here you
                  can find your right destination.
                </p>
                <button className="btn">View All</button>
              </div>
            </div>
          </div>
        </section>

        <section className="subscribe">
          <div className="section__container subscribe__container">
            <div className="subscribe__content">
              <h2 className="section__title">Subscribe to get special prize</h2>
              <p className="section__subtitle">
                Explore your suitable and dream places around the world. Here you
                can find your right destination.
              </p>
            </div>
            <div className="subscribe__form">
              <form>
                <input type="email" placeholder="Your email here" />
                <button className="btn" type="submit">Send</button>
              </form>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="section__container footer__container">
            <div className="footer__col">
              <h3>Pathway<span>.</span></h3>
              <p>
                Explore your suitable and dream places around the world. Here you
                can find your right destination.
              </p>
            </div>
            <div className="footer__col">
              <h4>Support</h4>
              <p>FAQs</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact Us</p>
            </div>
            <div className="footer__col">
              <h4>Address</h4>
              <p>
                <span>Address:</span> 280 Wilson Street, Cima, California, 92323,
                United States
              </p>
              <p><span>Email:</span> info@pathway.com</p>
              <p><span>Phone:</span> +91 9876543210</p>
            </div>
          </div>
          <div className="footer__bar">
            Copyright © 2024. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}

export default App;
