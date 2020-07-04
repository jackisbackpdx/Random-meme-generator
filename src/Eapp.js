import React, {Component} from 'react';
import './Eapp.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            text: '',
            gender: '',
            isFriendly: true,
            favColor: 'Green'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        let {name, value, type, checked} = event.target;
        type === 'checkbox' ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.firstName} name='firstName' placeholder='First Name' onChange={this.handleChange}/>
                <br/>
                <input type='text' value={this.state.lastName} name='lastName' placeholder='Last Name' onChange={this.handleChange}/>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <br/>
                <textarea name='text' value={this.state.text} onChange={this.handleChange}/>
                <br/>
                <label>
                    <input 
                    type='checkbox'
                    checked={this.state.isFriendly}
                    name='isFriendly'
                    onChange={this.handleChange}
                    /> Is friendly?
                </label>
                <br/>
                <label>
                    <input
                    type='radio'
                    name='gender'
                    value='male'
                    checked={this.state.gender === 'male'}
                    onChange={this.handleChange}
                    /> Male
                </label>
                <br/>
                <label>
                    <input
                    type='radio'
                    name='gender'
                    value='non-binary'
                    checked={this.state.gender === 'non-binary'}
                    onChange={this.handleChange}
                    /> Non-binary
                </label>
                <br/>
                <label>
                    <input
                    type='radio'
                    name='gender'
                    value='female'
                    checked={this.state.gender === 'female'}
                    onChange={this.handleChange}
                    /> Female
                </label>
                {this.state.gender === '' ? null : <h2>You are a {this.state.gender}</h2>}
                <br/>
                <label>
                    What is your favorite color? 
                <select onChange={this.handleChange} name='favColor' value={this.state.favColor}>
                    <option value='Red'>Red</option>
                    <option value='Green'>Green</option>
                    <option value='Blue'>Blue</option>
                </select> 
                </label>
                <h2><span style={{color: this.state.favColor}}>{this.state.favColor}</span> is a dope color!</h2>
                <button>Submit</button>
            </form>
        )
    }
}

export default App