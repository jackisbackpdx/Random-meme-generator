import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      character: {},
      loading: false,
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch('https://swapi.dev/api/people/1')
    .then(response => response.json())
    .then(data => {

      this.setState({
        character: data,
        loading: false})
    })
  }
  render() {
    const text = this.state.loading ? "Loading..." : this.state.character.name
    return (
      <div>
        {text}
      </div>
    )
  }
}

// export default App;
