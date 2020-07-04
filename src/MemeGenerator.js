import React from 'react'

class MemeGenerator extends React.Component {
    state = {
        topText: '',
        bottomText: '',
        randomImg: 'http://i.imgflip.com/1bij.jpg',
        allMemeImages: [],
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let randomNumber = Math.floor(Math.random() * this.state.allMemeImages.length);
        const img = this.state.allMemeImages[randomNumber].url;
        this.setState({randomImg: img})
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImages: memes })
            })
    }

    render() {
        return (
            <div>
                <form className='meme-form' onSubmit={this.handleSubmit}>
                    <label>
                        Top Text:
                        <input 
                        type='text'
                        name='topText' 
                        value={this.state.topText} 
                        onChange={this.handleChange}/>
                    </label>
                    <label>
                        Bottom Text:
                        <input 
                        type='text'
                        name='bottomText' 
                        value={this.state.bottomText} 
                        onChange={this.handleChange}/>
                    </label>
                    <button>Gen</button>
                </form>
                <div className='meme'>
                    <h2 className='top'>{this.state.topText}</h2>
                    <img alt='' src={this.state.randomImg}/>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator