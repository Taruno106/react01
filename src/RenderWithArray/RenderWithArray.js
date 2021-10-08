import React, { Component } from 'react'

export default class RenderWithArray extends Component {

    productList = [
        { id: 1, name: "black car", price: 1000, img: "./img/CarBasic/products/black-car.jpg" },
        { id: 2, name: "steel car", price: 2000, img: "./img/CarBasic/products/steel-car.jpg" },
        { id: 3, name: "silver car", price: 2000, img: "./img/CarBasic/products/silver-car.jpg" },
        { id: 4, name: "red car", price: 1000, img: "./img/CarBasic/products/red-car.jpg" },
    ];

    renderTable = () => {
        // Cách 1:
        // //content (chứa các đối tượng tr => let content = [{},{},{},...];)
        // let content = [];
        // //duyệt mảng (productList)
        // for(let i = 0; i < this.productList.length; i++){
        //     let product = this.productList[i];
        //     //lúc duyêt mảng sẽ tao các tr
        //     let objTR = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td>
        //             <img className="w-25" src={product.img} alt="" />
        //         </td>
        //     </tr>

        //     content.push(objTR);
        // }
        // //return content vao tbody
        // return content;

        // Cách 2
        let content = this.productList.map((product, index) => {
            //return trong ham map đặc biệt hơn, nó sẽ duyệt hết mảng roi mới return (dừng vong lặp) ra và trả ve 1 mảng mới chứa các giá trị vừa return
            return <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="w-50">
                    <img className="w-25" src={product.img} alt="" />
                </td>
            </tr>
        });

        return content;
    }
    render() {  
        return (
            <div classname="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Tạo UI bang code JS */}
                        {this.renderTable()};
                    </tbody>
                </table>
            </div>

        )
    }
}
