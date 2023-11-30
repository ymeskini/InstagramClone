import React from 'react';
import {Alert} from 'react-native';
import {signInWithRedirect} from 'aws-amplify/auth';

import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
  const onSignInGoogle = async () => {
    try {
      await signInWithRedirect({
        provider: 'Google',
      });
    } catch (err) {
      Alert.alert('Error', (err as Error).message);
    }
  };

  return (
    <CustomButton
      text="Sign In with Google"
      onPress={onSignInGoogle}
      bgColor="#FAE9EA"
      fgColor="#DD4D44"
    />
  );
};

export default SocialSignInButtons;
