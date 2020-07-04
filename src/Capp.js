import React, {Component} from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            value: 'Coconut'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('Your favorite fruit is ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>Pick your favorite fruit
                <select value={this.state.value} onChange={this.handleChange}>
                    <option>Grapefruit</option>
                    <option>Lime</option>
                    <option>Coconut</option>
                    <option>Mango</option>
                </select>
            </label>
            <input type='submit' value='Submit'></input>
        </form>
        )
    }
}

export default App;