import React, { Component } from 'react';

class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
        }
    }

 async componentDidMount() {

        let res = await fetch("https://dog.ceo/api/breeds/image/random")
        let json = await res.json()

        console.log(json.message)


        this.setState({
            url: json.message
        })
        
    }

    handleSubmit(e) {
        e.preventDefault()
        this.componentDidMount()
    }

    render() {

        let { url } = this.state

        return (
            <div>
                <button onClick={(e) => this.handleSubmit(e)}>Get New Image</button>
                <div>
                    <img src={url}></img>
                </div>
            </div>
        );
    }
}

export default DogIndex