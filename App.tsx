import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Amplify} from 'aws-amplify';

import amplifyconfig from './src/amplifyconfiguration.json';
import {Navigation} from './src/navigation';

Amplify.configure(amplifyconfig);

const App = () => (
  <SafeAreaView style={styles.root}>
    <Navigation />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
