import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import {CommentsScreen} from './src/screens/CommentsScreen';
import {ProfileScreen} from './src/screens/ProfileScreen';

const App = () => (
  <SafeAreaView style={styles.root}>
    {/* <HomeScreen /> */}
    {/* <CommentsScreen  /> */}
    <ProfileScreen />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
