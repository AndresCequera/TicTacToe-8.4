import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h2>Welcome to Tic Tac Toe!</h2>
                <h3>{this.props.text}</h3>
            </header>
        );
    }

}

export default Header;