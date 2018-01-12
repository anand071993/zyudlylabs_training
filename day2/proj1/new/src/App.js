import React from 'react';
import './App.css';
import './Nex.js';
import Nex from './Nex.js';
import ForceUpdate from './ForceUpdate';
import Reeactdom from './Reeactdom.js';
class App extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
        data:[]
        
      }
      this.myArray=[];
      this.setStatehandler=this.setStatehandler.bind(this);
      this.onchange=this.onchange.bind(this);
    };

    setStatehandler(){
      var item= "anand"
      this.myArray.push(item);
      this.setState({data:this.myArray})
      console.log(this.myArray)
    };
    onchange(){
   this.myArray.pop(this.myArray);
    this.setState({data:this.myArray})
    console.log(this.myArray)
    };
   render()
   {
     return(
       <div>
         <Nex/>
       <button onClick={this.setStatehandler}> setState </button>
       <button onClick={this.onchange}>remove</button>
       <h4>state Array:{this.state.data}</h4>
  
       <div>
         <ForceUpdate/>
         </div>
       
         <div>
           <Reeactdom/>
          </div>

       </div>
     );
   }
  }

  export default App

