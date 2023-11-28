import React from 'react';
import {Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import userData from '../../data/user.json';
import {styles} from './styles';
import {Button} from '../../components/Button';

export const ProfileHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Image source={{uri: userData.image}} style={styles.avatar} />
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Post</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Following</Text>
        </View>
      </View>

      <Text style={styles.name}>{userData.name}</Text>
      <Text>{userData.bio}</Text>

      <View style={styles.actionsContainer}>
        <Button
          text="Edit Profile"
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
        />
        <Button
          text="Another Button"
          onPress={() => {
            console.warn('Edit Profile');
          }}
        />
      </View>
    </View>
  );
};
