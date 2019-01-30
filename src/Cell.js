import React, { Component } from 'react';
import './App.css';

export default class Cell extends Component{
    render(){
        const { title } = this.props;
        const { picture } = this.props;

        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
          } 
        return(    
        <div className="List-element container" onClick={handleClick}>
            <img src={picture} alt={title} />{title}
        </div>
        )
    }
}
