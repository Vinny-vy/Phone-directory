import React from 'react';
import './header'
const Header = function(props) {
    //const Header = function() {
    return (
        <div className="header">
       
        {props.heading}
        </div>
    )
}

export default Header;