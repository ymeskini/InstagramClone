import React from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/core';
import {signUp} from 'aws-amplify/auth';

import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {SignUpNavigationProp} from '../../../types/navigation';
import colors from '../../../theme/colors';
import {EMAIL_REGEX} from '../../../constants/regex';

type SignUpData = {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: {isSubmitting},
  } = useForm<SignUpData>();
  const pwd = watch('password');
  const navigation = useNavigation<SignUpNavigationProp>();

  const onRegisterPressed = async ({name, email, password}: SignUpData) => {
    try {
      await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            name,
            email,
          },
        },
      });
      navigation.navigate('Confirm email', {email});
    } catch (err) {
      Alert.alert('Failed to sign up', (err as Error).message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate('Sign in');
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <FormInput
          name="name"
          control={control}
          placeholder="Full name"
          rules={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Name should be max 24 characters long',
            },
          }}
        />

        <FormInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <FormInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
        <FormInput
          name="passwordRepeat"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry
          rules={{
            validate: (value: string) =>
              value === pwd || 'Password do not match',
          }}
        />

        <CustomButton
          text={isSubmitting ? 'Loading...' : 'Register'}
          onPress={handleSubmit(onRegisterPressed)}
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        {/* <SocialSignInButtons /> */}

        <CustomButton
          text="Have an account? Sign in"
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
    color: colors.black,
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: colors.primary,
  },
});

export default SignUpScreen;
