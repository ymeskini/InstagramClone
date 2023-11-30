import React from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import {useRoute} from '@react-navigation/native';
import {confirmSignUp, resendSignUpCode} from 'aws-amplify/auth';

import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {
  ConfirmEmailNavigationProp,
  ConfirmEmailRouteProp,
} from '../../../types/navigation';

type ConfirmEmailData = {
  code: string;
};

const ConfirmEmailScreen = () => {
  const route = useRoute<ConfirmEmailRouteProp>();
  const {
    control,
    handleSubmit,
    formState: {isSubmitting},
  } = useForm<ConfirmEmailData>();

  const navigation = useNavigation<ConfirmEmailNavigationProp>();

  const onConfirmPressed = async (data: ConfirmEmailData) => {
    try {
      await confirmSignUp({
        confirmationCode: data.code,
        username: route.params.username as string,
      });
      navigation.navigate('Sign in');
    } catch (err) {
      Alert.alert('Failed to confirm email', (err as Error).message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate('Sign in');
  };

  const onResendPress = async () => {
    try {
      await resendSignUpCode({
        username: route.params.username as string,
      });
      Alert.alert('Code resent successfully');
    } catch (err) {
      Alert.alert('Failed to resend code', (err as Error).message);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <FormInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: 'Confirmation code is required',
          }}
        />

        <CustomButton
          disabled={isSubmitting}
          text="Confirm"
          onPress={handleSubmit(onConfirmPressed)}
        />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
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

export default ConfirmEmailScreen;
