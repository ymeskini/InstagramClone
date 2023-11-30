import React from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/core';
import {resetPassword} from 'aws-amplify/auth';

import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {ForgotPasswordNavigationProp} from '../../../types/navigation';
import {EMAIL_REGEX} from '../../../constants/regex';

type ForgotPasswordData = {
  email: string;
};

const ForgotPasswordScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {isSubmitting},
  } = useForm<ForgotPasswordData>();
  const navigation = useNavigation<ForgotPasswordNavigationProp>();

  const onSendPressed = async (data: ForgotPasswordData) => {
    try {
      await resetPassword({
        username: data.email,
      });
      navigation.navigate('New password', {
        email: data.email,
      });
    } catch (err) {
      Alert.alert('Failed to send email', (err as Error).message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate('Sign in');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <FormInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />

        <CustomButton
          disabled={isSubmitting}
          text="Send"
          onPress={handleSubmit(onSendPressed)}
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ForgotPasswordScreen;
