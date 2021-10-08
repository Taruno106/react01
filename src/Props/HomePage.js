import React, { Component } from 'react'
import Product from './Product'

export default class HomePage extends Component {
    
    productList = [
        { id: 1, name: "black car", price: 1000, img: "./img/CarBasic/products/black-car.jpg" },
        { id: 2, name: "steel car", price: 2000, img: "./img/CarBasic/products/steel-car.jpg" },
        { id: 3, name: "silver car", price: 2000, img: "./img/CarBasic/products/silver-car.jpg" },
        { id: 4, name: "red car", price: 1000, img: "./img/CarBasic/products/red-car.jpg" },
    ];
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            {/* Cách 1: Tự tạo props */}
                            {/* <Product nameCar="Back Car" price={1000} color="red"/> */}
                            {/* Cách 2: object */}
                            <Product product={this.productList[0]}/>
                        </div>
                        <div className="col-4">
                            {/* Cách 1: Tự tạo props */}
                            {/* <Product nameCar="Red Car" price={2000} color="steel"/> */}
                            {/* Cách 2: object */}
                            <Product product={this.productList[1]}/>

                        </div>
                        <div className="col-4">  
                            {/* Cách 1: Tự tạo props */}                       
                            {/* <Product nameCar="Silver Car" price={3000} color="silver"/> */}
                            {/* Cách 2: object */}
                            <Product product={this.productList[2]}/>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
