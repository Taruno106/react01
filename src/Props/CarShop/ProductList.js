import React, { Component } from 'react'
import ProductCar from './ProductCar'

export default class ProductList extends Component {
    renderCarList = () => {
        let {arrCar, xemChiTiet} = this.props;
        return this.props.arrCar.map((car, index) => {
            return <div className="col-3">
            <ProductCar sp={car} xem={xemChiTiet}/>
        </div>
        })
    }
    
    render() {
        return (
            <div className="row">
                    {this.renderCarList()}
            </div>
        )
    }
}
