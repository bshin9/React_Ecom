import React from 'react';

// Card component that is being called in the products to loop through
const Card = ({ name, price, image, type, description }) => {
    return (
          <div className="card-main">
            <div className="card-row">
              <div className="card-container">
                <div className="item-img">
                  <a href="#a"><img src={image} className="" alt="properwatches" /></a>
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