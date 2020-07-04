import React, {Component} from 'react'
import FormComponent from './FormComponent'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: 0,
            gender: '',
            destination: 'United States',
            gluten: false,
            dairy: false,
            penut: false,
            seafood: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, type, checked, value} = event.target;
        type === 'checkbox' ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }


    render() {
        return (
            <FormComponent handleChange={this.handleChange} {...this.state}/>
        )
    }
}

export default Form;