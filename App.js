import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AddEntry from './components/AddEntry'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import History from './components/History'


export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <AddEntry/>
    </Provider>

  );
}


