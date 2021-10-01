import React, { Component } from 'react'
//css stylesheet
import "./Style.css"
import StyleModule from "./StyleComponent.module.css"

export default class StyleComponent extends Component {
    //inline css
    render() {
        //cách 1
        let styleInline = {
            backgroundColor: "pink",
            color: "white"
        }
        return (
            <div className="container">
                {/* cách 2 */}
                {/* style của react la đối tượng */}
                <p style={{
                    backgroundColor: "green",
                    color: "yellow"
                }} className="text">StyleComponent</p>
            <p style={styleInline} className="text fontText">StyleInline</p>
            <p className={StyleModule.fontText}>Style Module</p>
            <p style={styleInline} className="text fontText">StyleInline</p>
            </div>
        )
    }
}
