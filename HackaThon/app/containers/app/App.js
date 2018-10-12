import { Provider } from 'react-redux';
import React, { Component } from 'react';
import Root from '../../router/RootNavigator';
import store from '../../store';
 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;