import React, { Component } from 'react'
import ContentComponent from './ContentComponent'
import HeaderComponent from './HeaderComponent'
import NavigationComponent from './NavigationComponent'
import FooterComponent from './FooterComponent'

export default class HomeComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Header Component */}
                        <HeaderComponent/>
                    </div>
                    <div className="col-4">
                        {/* Navigation Component */}
                        <NavigationComponent/>
                    </div>
                    <div className="col-8">
                        {/* Content Component */}
                        <ContentComponent/>
                    </div>
                    <div className="col-12">
                        {/* Footer Component */}
                        <FooterComponent/>
                    </div>
                </div>
            </div>
        )
    }
}
