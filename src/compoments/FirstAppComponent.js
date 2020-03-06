import React from 'react';

export default class Component1 extends React.Component {


    render() {
        return (<div>
            <div>
                <img src="/logo192.png"></img>
            </div>
            Hello {this.props.test}

            <div>
                <button onClick={() => {
                    this.props.changeText()
                }}>
                    GGOOOO
            </button>

            </div>
        </div>)
    }
}
