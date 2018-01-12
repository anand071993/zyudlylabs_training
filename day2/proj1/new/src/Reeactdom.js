import React from 'react';
import ReactDOM from 'react-dom';

class Reeactdom extends React.Component{
    constructor(){
        super()
    
    this.findDOMNodeHandler=this.findDOMNodeHandler.bind(this);
    };

    findDOMNodeHandler(){
        var mydiv=document.getElementById('mydiv');
    ReactDOM.findDOMNode(mydiv).style.color='red';
    };
    
    render(){
        return(
            <div>
                <button onClick={this.findDOMNodeHandler}>click!</button>
                <div id='mydiv'>
                Anand
                </div>
                </div>
        );
    }
}
export default Reeactdom