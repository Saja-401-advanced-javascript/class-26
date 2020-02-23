import React from 'react';
// import './app.scss';


const Header = ()=> {
  return(
    <header>
      <h1>
        Hello From Class 26
      </h1>
    </header>
  )
}

const Footer = () => {
  return(
    <footer>
      See U in Class 27
    </footer>
  )
}

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      counter : 0,
    }
  }

  handleChange = e => {
    let counter = e.target.value;
    this.setState ({counter})
  }

  increaseClicks = c => {
    c.preventDefault();
    let counter = ++this.state.counter;
    this.setState({counter})
    console.log('inc counter',this.state);
    
  }

  decreaseClicks = c => {
    c.preventDefault();
    let counter = --this.state.counter;
    this.setState({counter})
    console.log('dec counter',this.state);

  }

  render (){
    return(
      <section>
        <h3>
         counter = {this.state.counter}
        </h3>
        <button onClick={this.increaseClicks}>
          click to increase counter
        </button>
        <button onClick={this.decreaseClicks}>
          click to decrease counter
        </button>
      </section>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
