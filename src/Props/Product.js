import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        // props: truyền từ HomePage (cha) sang Product (con)
        //detructuring
        let {nameCar, price, color} = this.props; //nó sẽ bóc tách thuộc tính nameCar, price từ this.props ra để dung` riêng cho gọn code
        //object
        let {product} = this.props;
        return (
            <div>
                <div className="card">
                    {/* <img src="./img/CarBasic/products/black-car.jpg" className="card-img-top" alt="..." /> */}
                    <img src={product.img} alt="..." />
                    <div className="card-body">
                        {/* <h5 className="card-title">{this.props.nameCar}</h5> */}
                        {/* <h5 className="card-title">{nameCar}</h5> */}
                        <h5 className="card-title">{product.name}</h5>
                        {/* <p className="card-text">{this.props.price}</p> */}
                        {/* <p className="card-text">{price}</p> */}
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>

        )
    }
}
