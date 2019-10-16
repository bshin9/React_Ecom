import React from "react";
import { NavLink } from "react-router-dom";
import "../Homepage.css";

// created Home class 
class Home extends React.Component {

  render() {
    return (
      <div className="App">
        {/* HEADER */}
        <section id="header">
        {/* had to create anchor tag with name of header so react router could find it */}
        <a href="#a" name="header"><span>h</span></a>
          <div className="container text-center">
            <div className="row">
              <div className="col-md-6 header-right hidden-sm-down">
                <h2 className="properHeader">WELCOME TO PROPER WATCH!</h2>
                <p className="lead">
                  Proper Watch is where you can find a variety of classy and
                  stylistic watches ranging from all different price ranges. We
                  will make sure that you get all the information you need to
                  make an informed decision before you buy anything. Sign up
                  today to get free emails from us that will update your
                  catalogue as newer watches are released!
                </p> 
                <NavLink to="/products" className="btn btn-outline-info btn-block" id="btn">
                Check Out Our Watches!
              </NavLink>
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
                  data-ride="carousel" >
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
                        <footer className="blockquote-footer" id="slider">
                          Conor McGregor loves this edition of the rolex
                        </footer>
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
                        <footer className="blockquote-footer" id="slider">
                          Floyd Mayweather proudly wears this rolex
                        </footer>
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
                        <footer className="blockquote-footer" id="slider">
                          Post Malone adores this collection of Versace
                        </footer>
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
            <a href name="who"><span>h</span></a>
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
        {/* Why */}
        <section id="why">
        <a href name="why"><span>h</span></a>
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12 wow fadeIn">
                <h2 className="alignTxt">Why Do We Do This?</h2>
                <hr width="30%" />
                <p />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <i className="fa fa-thumbs-o-up fa-3x" />
                <h3 className="alignTxt">Authenticity</h3>
                <p>
                  We have one goal and it's to bring you the best quality of
                  service we can provide. We were inspired by the long list of
                  classic time pieces, but people tend to believe that something
                  must be expensive to be considered a luxury. We wanted to
                  change that perspective by showing you watches that are
                  extremely stylish, but also affordable. We do have some
                  watches that are very high end, but we also have a variety so
                  you do not have to break your bank account trying to buy the
                  most expensive watch.
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
