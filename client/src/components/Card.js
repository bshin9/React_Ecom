import React from 'react';


const Card = ({ name, price, image, type, description }) => {
    return (
          <div id="products">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="item-img">
                  <a href="#a"><img src={image} className="card-img-top img-fluid img-product" alt="properwatches" /></a>
                  <div className="img-overlay" />
                </div>
                <div className="card-body">
                  <h2 className="strong">{name} ${price}</h2>
                  <p className="card-text">{description}</p>
                  <p>{type}</p>
                </div>
              </div>
            </div>
          </div>
        );
      }

export default Card;