import React, {Component} from 'react'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.name === 'isGoing' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <label>
                    Is Going:
                    <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Number Of Guests:
                    <input
                    name='numberOfGuests'
                    type='number'
                    value={this.state.numberOfGuests}
                    onChange={this.handleInputChange}
                    />
                </label>
            </form>
        )
    }
}

export default App