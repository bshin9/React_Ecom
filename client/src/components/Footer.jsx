import React from "react";

// Created separate Footer component so we can clean up some code in the Pages folder
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6">
              <h2>Proper Watch</h2>
              <p>
                We have our social media outlets here if you want to follow us
                for future updates we do!
              </p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.twitter.com">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.pinterest.com">
                    <i className="fa fa-pinterest" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://aboutme.google.com/">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Reach Out To Us!</h3>
              <ul className="list-unstyled">
                <li>
                  <p>
                    <strong>
                      <i className="fa fa-map-marker" />
                      36 Hillcrest St. Ontario, CA 91761
                    </strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      <i className="fa fa-envelope" />
                      propermail@hotmail.com
                    </strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      <i className="fa fa-phone" />
                      310-432-3444
                    </strong>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>© 2019 Designed by Brian Shin</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
