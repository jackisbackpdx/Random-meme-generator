import React, {Component} from 'react'
import './Bapp.css'
class App extends Component {
    constructor() {
        super()
        this.state = {
            value: 'React is cool',
            firstClick: true
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        let text = '';
        let length = event.target.value.length - 1;
        this.state.firstClick ? text = event.target.value[length] : text = event.target.value 
        this.setState({
            value: text,
            firstClick: false    
        })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value)
        event.preventDefault()
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <label>
                   Name:
                   <textarea type='text' value={this.state.value} onChange={this.handleChange}></textarea>
               </label>
               <input type='submit' value='Submit'></input>
            </form>
        )
    }
}

// export default App