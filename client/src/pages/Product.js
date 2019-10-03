import React from "react";
import axios from "axios";
import Card from "../components/Card";

// Create a Product class
class Product extends React.Component {
    // created a state with product's array
    state = {
      products: []
    };
  // using a componentDidMount here to retrieve my products from my endpoint
  componentDidMount() {
    const url = 'http://localhost:8000/api/products';
    fetch(url).catch(error => console.log('BAD', error)).then(response => console.log('GOOD', response));
    // axios
    //   .get("/api/products")
    //   .then(res => {
    //     this.setState({ products: res.data }, () =>
    //       console.log(this.state.products)
    //     );
    //     console.log(this.state.products);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  getProducts = () => {
    const url = "http://localhost:8000/api/products" ;
    fetch(url).catch(error => console.log('BAD', error)).then(response => console.log('GOOD', response));
    // axios.get("http://localhost:8000/api/products")
    // .then(res => {
    //   this.setState({ products: res.data })
    // })
    // .catch(err => {
    //   console.log(err);
    // });
  }

  getSelectedProducts = (e) => {
    // change to fetch instead of axios (differnt code all together)
    const url = "http://localhost:8000/api/productfilter/" + e.target.value;
    fetch(url).catch(error => console.log('BAD', error)).then(response => console.log('GOOD', response));
    // axios.get("http://localhost:8000/api/productfilter/" + e.target.value)
    // .then(res => {
    //   this.setState({ products: res.data });
    // })
    // .catch(err => {
    //   console.log(err);
    // });
  }

  getSelectedPrices = (low, high) => {
    const url = "http://localhost:8000/api/pricefilter/" + low + "/" + high;
    fetch(url).catch(error => console.log('BAD', error)).then(response => console.log('GOOD', response));
    // axios.get("http://localhost:8000/api/pricefilter/" + low + "/" + high)
    // .then(res => {
    //   this.setState({ products: res.data });
    // })
    // .catch(err => {
    //   console.log(err);
    // });
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
              <button className="btn active" onClick={this.getProducts}>
                Show all
              </button>
              <button className="btn" value="Rubber" onClick={this.getSelectedProducts}>
                Rubber
              </button>
              <button className="btn" value="Wood" onClick={this.getSelectedProducts}>
                Wood
              </button>
              <button className="btn" value="Leather" onClick={this.getSelectedProducts}>
                Leather
              </button>
              <button className="btn" value="Steel" onClick={this.getSelectedProducts}>
                Steel
              </button>
              <button className="btn" value="Gold" onClick={this.getSelectedProducts}>
                Gold
              </button>
            </div>
            <div id="myBtnContainer">
              <button className="btn active" onClick={this.getProducts}>
                All Prices
              </button>
              <button className="btn" value="199" onClick={() => this.getSelectedPrices(0, 199)}>
                $0-$199
              </button>
              <button className="btn" value="399" onClick={() => this.getSelectedPrices(200, 399)}>
                $200-$399
              </button>
              <button className="btn" value="599" onClick={() => this.getSelectedPrices(400, 599)}>
                $400-$599
              </button>
              <button className="btn" value="800" onClick={() => this.getSelectedPrices(600, 40000)}>
                $600-$40,000
              </button>
            </div>
            {/* Products Layout */}
            {/* mapping through my products here and calling back my Card component, 
                each variable here retrieves specific information from the Card */}
            <div className="flex-items">
              {this.state.products &&
                this.state.products.map(product => (
                  <Card
                    key={product.product_name}
                    name={product.product_name}
                    price={product.price}
                    description={product.product_description}
                    image={product.image}
                  />
                ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Product;
