import React, { Component } from 'react'
import ProductList from './ProductList';
import Modal from './Modal';

export default class CarShop extends Component {
    products = [
        { id: 1, name: 'black car', img: './img/CarBasic/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './img/CarBasic/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './img/CarBasic/products/silver-car.jpg', price: 3000 },
        { id: 4, name: 'Steel car', img: './img/CarBasic/products/steel-car.jpg', price: 4000 }
    ];
    state = {
        carDetail:{ id: 1, name: 'black car', img: './img/CarBasic/products/black-car.jpg', price: 1000 }
    }
    //state đặt ở đâu thi setState goi ở đấy
    xemChiTiet = (car) => {
        this.setState({
            carDetail:car
        })
    }
    
    render() {
        return (
            <div className="container">
                <ProductList arrCar={this.products} xemChiTiet={this.xemChiTiet}/>

                {/* Modal */}
                <Modal productDetail={this.state.carDetail}/>
            </div>


        )
    }
}
