import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  app: {
    backgroundColor: '#ddd',
    color: '#fff'
  },
}

class App extends React.Component {
  render() {
    return (
      <div style={styles.app}>
        This is a fine setup
      </div>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.querySelector('#app')
);