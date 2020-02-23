import React from 'react';
import Header from './header.js'
import Counter from './counter.js'
import Footer from './footer.js'

import './app.scss';

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
