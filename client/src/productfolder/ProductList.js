import React, { Component } from 'react'

class ProductList extends Component {
    render() {
        const { data, filterText } = this.props;
        const productList = data
        .filter(name => {
            return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        })
        .map(name => {
            return (
                <li key={name.id} className={name.price}>{name.name}</li>
            )
        })
        return (
            <div>
                <ul>
                    {productList}
                </ul>
            </div>
        );
    }
}
//http://localhost:8000/api/products