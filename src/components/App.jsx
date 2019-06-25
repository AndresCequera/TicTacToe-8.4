import React from 'react';

import '../assets/style/App.css';
import Header from './Header.jsx';
import Board from './Board.jsx';
import Footer from './Footer';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: PLAYERX,
      values: [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
      ],
      winner: "",
      movements: 0
    }
    this.appClick = this.appClick.bind(this);
    this.appResetGame = this.appResetGame.bind(this);
  }

  appClick(rowIndex, columnIndex) {
    let newValues = JSON.parse(JSON.stringify(this.state.values));
    let turn = this.state.turn;
    let newValue = this.state.turn === PLAYERX ? "X" : "0"
    let winner = "";
    let movements = this.state.movements;

    if (newValues[rowIndex][columnIndex] === "-" ) {
      turn = this.state.turn === PLAYERX ? PLAYER0 : PLAYERX
      newValues[rowIndex][columnIndex] = newValue;
      movements++;
    }

    if (newValues[0][0] === newValue & newValues[0][1] === newValue & newValues[0][2] === newValue
      || newValues[1][0] === newValue & newValues[1][1] === newValue & newValues[1][2] === newValue
      || newValues[2][0] === newValue & newValues[2][1] === newValue & newValues[2][2] === newValue
      || newValues[0][0] === newValue & newValues[1][0] === newValue & newValues[2][0] === newValue
      || newValues[0][1] === newValue & newValues[1][1] === newValue & newValues[2][1] === newValue
      || newValues[0][2] === newValue & newValues[1][2] === newValue & newValues[2][2] === newValue
      || newValues[0][0] === newValue & newValues[1][1] === newValue & newValues[2][2] === newValue
      || newValues[0][2] === newValue & newValues[1][1] === newValue & newValues[2][0] === newValue
    ) {
      winner = 'Winner ' + (newValue === "X" ? "Player 1 - Xs" : "Player 2 - 0s");
    }

    if (this.state.winner === "") {
      this.setState({
        turn: turn,
        values: newValues,
        winner: winner,
        movements : movements
      });
    }
  }

  appResetGame(){
    this.setState({
      turn: PLAYERX,
      values: [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
      ],
      winner: "",
      movements: 0
    });
  }

  render() {
    let text = "Turn of " + this.state.turn;

    return (
      <div style={{ height: '100%', textAlign: "center", background: "#e4e4e4" }}>
        <Header text={this.state.winner === "" ? text : this.state.winner}></Header>
        <Board appClick={this.appClick} values={this.state.values}></Board>
        <Footer text={this.state.movements} appResetGame={this.appResetGame}></Footer>
      </div>

    );
  }
}

export default App;
