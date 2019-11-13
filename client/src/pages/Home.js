import React from "react";
import { NavLink } from "react-router-dom";

// created Home class
class Home extends React.Component {
  render() {
    return (
      <div className="App">
        {/* HEADER */}
        <header id="page-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto text-center">
              </div>
            </div>
          </div>
        </header>

        {/* INFO SECTION */}
        <section id="info" className="py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <h3>WELCOME TO PROPER WATCH!</h3>
                <p>
                  Proper Watch is where you can find a variety of classy and
                  stylistic watches ranging from all different price ranges. We
                  will make sure that you get all the information you need to
                  make an informed decision before you buy anything. We pride
                  ourselves in knowing that we prioritize quality over quantity.
                  The button below will take you to our products page!
                </p>
                <NavLink
                  to="/products"
                  className="btn btn-outline-info btn-block"
                  id="btn"
                >
                  Check Out Our Watches!
                </NavLink>
              </div>
              <div className="col-md-6">
                <img
                  src="img/gorilla.jpeg"
                  className="img-fluid pic"
                  alt="proper"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Slide */}
        <section id="customers">
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <h2>A Proper Collection</h2>
                <hr width="30%" />
                <p>Proper Edition</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  id="quotes"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#quotes"
                      data-slide-to={0}
                      className="active"
                    />
                    <li data-target="#quotes" data-slide-to={1} />
                    <li data-target="#quotes" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <blockquote className="blockquote">
                        <img
                          src="img/rolex.jpg"
                          className="watchSlide"
                          alt="rolex"
                        />
                        <div className="blockquote-footer" id="slider">
                          Conor McGregor loves this edition of the rolex
                        </div>
                        <p>
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <br />
                          Rolex Men's Submariner Automatic Blue Dial Oyster 18k
                          Solid Gold $30,000
                        </p>
                      </blockquote>
                    </div>
                    <div className="carousel-item">
                      <blockquote className="blockquote">
                        <img
                          src="img/rolex5k.jpg"
                          className="watchSlide"
                          alt="rolex5k"
                        />
                        <div className="blockquote-footer" id="slider">
                          Floyd Mayweather proudly wears this rolex
                        </div>
                        <p>
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <br />
                          Rolex Daytona $200,000
                        </p>
                      </blockquote>
                    </div>
                    <div className="carousel-item">
                      <blockquote className="blockquote">
                        <img
                          src="img/versace.webp"
                          className="watchSlide"
                          alt="versace"
                        />
                        <div className="blockquote-footer" id="slider">
                          Post Malone adores this collection of Versace
                        </div>
                        <p>
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <br />
                          45mm Sport Tech Chronograph $1,850
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Who we are */}
        <section id="who">
          <a href name="who">
            <span>h</span>
          </a>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2 className="alignTxt">Who Are We?</h2>
                <hr text-align="center" width="50%" />
                <p className="lead">
                  We were created and funded by UFC Lightweight and
                  Featherweight Champion, Conor McGregor. We are based off in
                  California and have only been in business for one year. After
                  the success of Conor's Proper Twelve whiskey business, he
                  decided to pursue another passion of his. Proper Twelve has
                  reached over $1 Billion in just one year which set a record
                  for highest revenue earned in a single year in the whiskey
                  business. We hope to provide you with the best customer
                  experience and excellent quality of products using the
                  experience gained from the success of his other ventures.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  className="img-fluid"
                  src="img/conorbelt.jpg"
                  alt="belts"
                />
              </div>
            </div>
          </div>
        </section>
        {/* WHY  */}
        <section id="home-icons" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4 text-center">
              <i class="fas fa-chart-line fa-3x mb-2" />
                <h3>Stocks</h3>
                <p>
                  Our stocks are projected to continue north.
                </p>
              </div>
              <div className="col-md-4 mb-4 text-center">
              <i class="fas fa-money-bill fa-3x mb-2" />
                <h3>Savings</h3>
                <p>
                  We want to provide you the best deals in the market so you get a fair price.
                </p>
              </div>
              <div className="col-md-4 mb-4 text-center">
              <i class="fas fa-crown fa-3x mb-2" />
                <h3>Crowning Achievement</h3>
                <p>
                  Conor may be king, but in this case, we work for you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
