
import React, { Component } from 'react';
import styles from './app.module.css'
class App extends Component {
  state = { 
    title: 'חיפוש רכבי אספנות'
   }
  render() { 
    return (<div className={styles.container}>
        <div className="title">
      <h1>
        {this.state.title}
      </h1>
        </div>
    </div>);
  }
}

export default App;