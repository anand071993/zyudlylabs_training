import React from 'react';

class ForceUpdate extends React.Component{
    constructor(){
super();
this.forceUpdatehandler=this.forceUpdatehandler.bind(this);
    };
    forceUpdatehandler()
    {
this.forceUpdate();
    };
    render(){
        return(
            <div>
                <button onClick={this.forceUpdatehandler}>FORCE UPDATE </button>
                <h4>RandomNumber:{Math.random()}</h4>
            </div>
        );
    }
}
export default ForceUpdate