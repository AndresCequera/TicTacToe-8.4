import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.resetGame = this.resetGame.bind(this);
    }

    resetGame(){
        this.props.appResetGame();
    }
    render() {
        return (
            <footer>
                <h3>Number of movements: {this.props.text}</h3>
                <div>
                    <button className="myButtonAction" onClick={()=>this.resetGame()}>Reset</button>
                </div>
            </footer>
        );
    }

}

export default Footer;