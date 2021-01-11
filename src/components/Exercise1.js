import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }

   

    handleInput = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })

    }
    showAlert = () => {
        alert(`come in ${this.state.name}, you're ${this.state.age} that's good enough`)
    }

    render() {
        return (
            <div>
                Name <input id="name-input" name="name" onChange={this.handleInput}/>
                Age <input id="age-input" name="age" onChange={this.handleInput}/>
                <button onClick={this.showAlert}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;