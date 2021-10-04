import React, { Component } from 'react'

export default class HandleEvent extends Component {

    //phương thức
    //gõ nhanh (met)
    testHandleEvent = ()=>{
        alert("Click rồi nè!");
    } 

    showInfo = (name) => {
        alert(`Hello ${name}`)
    }
    

    render() {
        let fullName = "Nguyễn Văn A"; 
        return (
            <div>
                <div className="container py-5">
                    <button className="btn btn-warning mr-3" onClick={this.testHandleEvent}>
                        Click me
                    </button>
                    <button className="btn btn-warning" onClick={()=>{
                        this.showInfo(fullName);
                    }}>
                        Show Info
                    </button>
                </div>
            </div>
        )
    }
}


