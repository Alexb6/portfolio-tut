import React, { Component } from 'react';

class App extends Component {    

    // constructor() {
    //     super();
    //     this.state = { displayBio: false };
    //     // this.readMore = this.readMore.bind(this);
    //     // this.showLess = this.showLess.bind(this);
    //     this.toggleBioDisplay = this.toggleBioDisplay.bind(this);
    // }

    // readMore() {
    //     this.setState({ displayBio: true });
    // }

    // showLess() {
    //     console.log('showLess this ', this);
    //     this.setState({ displayBio: false });
    // }

    // toggleBioDisplay() {
    //     this.setState({ displayBio: !this.state.displayBio });
    // }

    state = { displayBio: false }; // This will be equivalent to the constructor, no need for the bind anymore

    toggleBioDisplay = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        const bio =  (
            <div>
                <p>I live in Paris, and I code every day.</p>
                <p>My favorite language is Javascript, and I think that React.js is awesome.</p>
                <p>Besides coding, I also love graphic design ang photography.</p>
                <button onClick = {this.toggleBioDisplay}>Read Less</button>
            </div>
        );

        return (
            <div>
                <h1>Hello !</h1>
                <p>My name is Alex Tran. I'm a Full Stack JS Web Developper.</p>
                <p>I'm always looking forward to working on meaningful projects</p>
                {this.state.displayBio ? bio : (
                    <div>
                        <button onClick = {this.toggleBioDisplay}>Read More</button>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default App;