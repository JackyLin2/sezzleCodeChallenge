import React, { Component} from 'react'
import  './clearButton.css';

class clearButton extends Component {
render(){
  return (
    <div 
        className="clear-btn"
        onClick={ () => this.props.handleClear()}
        >

        {this.props.children}
    </div>
  );
}
}

export default clearButton;