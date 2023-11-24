import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import {CommentsScreen} from './src/screens/CommentsScreen';
import comments from './src/data/comments.json';

const App = () => (
  <SafeAreaView style={styles.root}>
    {/* <HomeScreen /> */}
    <CommentsScreen comments={comments} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
