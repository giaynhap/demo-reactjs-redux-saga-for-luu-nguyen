import React from 'react';

export default class Component1 extends React.Component {


  render(){
    return (<div>
      Hello {this.props.test}
      <button onClick={()=>{
          this.props.changeText()
      }}>
        GGOOOO
      </button>
    </div>)
  }
}
