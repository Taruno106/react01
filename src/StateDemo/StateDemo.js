import React, { Component } from 'react'

export default class StateDemo extends Component {
    
    //thuộc tính
    // isLogin = false;
    userName = "HV001";

    /**
     * state:
     * _thuộc tính có sẵn của react class component
     * _công dụng: setState
     *  + gán lai giá trị cho thuộc tính
     *  + chạy lai phương thức render
     * 
     */
    state = {
        isLogin: false
    }
    

    //phương thức
    renderLogin = () => {
        if(this.state.isLogin){
            return <span className="text-white">{this.userName}</span>;
        }

        return <button className="btn btn-success" onClick={this.handleLogin}>Login</button>;
    }                                                       

    handleLogin = async () => {
        // this.isLogin = true;
        // console.log(this.isLogin);    
        let newState = {
            isLogin: true
        }
        //anfn: cú pháp gõ nhanh arrow function
        //setState: cơ chế bất đồng bộ
        //C1:
        // this.setState(newState,() => {
        //     console.log(this.state.isLogin);
        // });
        

        //C2: 
        await this.setState(newState); //kiểu như async await sẽ hiểu setState la cơ chế bất đồng bộ nên trình duyệt sẽ chờ line 46 chạy xong roi mới chạy dong` 47
        console.log(this.state.isLogin);
    }
    
    //phương thức render chỉ chạy 1 lần khi load trang web
    render() {
        return (
            <div className="container">
                <h1>State Demo</h1>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        {/* nội dung Login */}
                        {/* {this.isLogin ? <span className="text-white">{this.userName}</span> : <button className="btn btn-success">Login</button>} */}
                        {this.renderLogin()} {/* cần hiện lên UI ngay sau khi load trang web */} 

                        
                    </div>
                </nav>

            </div>
        )
    }
}
