import { Component } from "react";
import Number from "./number/number";

class App extends Component {
  state = {
    numbers1: [1, 2, 3, 4, 5, 6, 7],
    numbers2: [8, 9, 10, 11, 12, 13, 14],
    numbers3: [15, 16, 17, 18, 19, 20, 21],
    numbers4: [22, 23, 24, 25, 26, 27, 28],
    numbers5: [29, 30, 31, 32, 33, 34, 35, 36]
  };
  randomNumbers = () => {
    let numbers1 = (this.state.numbers1).sort(() => Math.random() - 0.5);
    console.log(numbers1); 
    let number1 = numbers1[0];
    console.log(number1);
    const index1 = numbers1.indexOf(number1);
    if (index1 > -1) {
      numbers1.splice(index1, 1);
    };
    let numbers2 = (this.state.numbers2).sort(() => Math.random() - 0.5); 
    let number2 = numbers2[0];
    const index2 = numbers2.indexOf(number2);
    if (index2 > -1) {
      numbers2.splice(index2, 1);
    };
    let numbers3 = (this.state.numbers3).sort(() => Math.random() - 0.5);
    let number3 = numbers3[0];
    const index3 = numbers3.indexOf(number3);
    if (index3 > -1) {
      numbers3.splice(index3, 1);
    }
    let numbers4 = (this.state.numbers4).sort(() => Math.random() - 0.5);
    let number4 = numbers4[0];
    const index4 = numbers4.indexOf(number4);
    if (index4 > -1) {
      numbers4.splice(index4, 1);
    }
    let numbers5 = (this.state.numbers5).sort(() => Math.random() - 0.5);
    let number5 = numbers5[0];
    const index5 = numbers5.indexOf(number5);
    if (index5 > -1) {
      numbers5.splice(index5, 1);
    }
    this.setState({number1, number2, number3, number4, number5})
  };
  render() {
    return (
      <div className="App">
      <button className='button' onClick={this.randomNumbers}>New numbers</button>
      <div className='wrapper'>
      <Number number={this.state.numbers1[0]} />
      <Number number={this.state.numbers2[0]} />
      <Number number={this.state.numbers3[0]} />
      <Number number={this.state.numbers4[0]} />
      <Number number={this.state.numbers5[0]} />
      </div>
      </div>
      );
    }     
  };
  export default App;
  