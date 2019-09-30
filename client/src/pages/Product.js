import React from "react";
import axios from "axios";
import Card from "../components/Card";

class Product extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    axios
      .get("/api/products")
      .then(res => {
        this.setState({ products: res.data }, () =>
          console.log(this.state.products)
        );
        console.log(this.state.products);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="Product">
        {/* HEADER */}
        <section id="header1">
          <div className="container">
            <div className="col-md-6 header-right hidden-sm-down"></div>
          </div>
        </section>
        {/* Product Page */}
        <section id="products">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Strut Out In Our Proper Watches</h2>
                <hr text-align="left" width="50%" />
                <p>To be a champ you have to look like one</p>
              </div>
            </div>
            {/* Filter */}
            <div id="myBtnContainer">
              <button className="btn active" onclick="filterSelection('all')">
                Show all
              </button>
              <button className="btn" onclick="filterSelection('rubber')">
                Rubber
              </button>
              <button className="btn" onclick="filterSelection('wood')">
                Wood
              </button>
              <button className="btn" onclick="filterSelection('leather')">
                Leather
              </button>
              <button className="btn" onclick="filterSelection('steel')">
                Steel
              </button>
              <button className="btn" onclick="filterSelection('gold')">
                Gold
              </button>
            </div>
            <div id="myBtnContainer">
              <button className="btn" onclick="filterSelection('all')">
                All Prices
              </button>
              <button className="btn" onclick="filterSelection('199')">
                $0-$199
              </button>
              <button className="btn" onclick="filterSelection('399')">
                $200-$399
              </button>
              <button className="btn" onclick="filterSelection('599')">
                $400-$599
              </button>
              <button className="btn" onclick="filterSelection('799')">
                $600-$799
              </button>
              <button className="btn" onclick="filterSelection('800')">
                $800-$40,000
              </button>
            </div>
            {/* Products Layout */}

            {this.state.products &&
              this.state.products.map(product => (
                <Card
                  name={product.product_name}
                  price={product.price}
                  description={product.product_description}
                  image={product.image}
                />
              ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Product;
