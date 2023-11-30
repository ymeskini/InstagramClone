import React from 'react';
import {useForm} from 'react-hook-form';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';

import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {
  NewPasswordNavigationProp,
  NewPasswordRouteProps,
} from '../../../types/navigation';
import {confirmResetPassword} from 'aws-amplify/auth';

type NewPasswordType = {
  code: string;
  password: string;
};

const NewPasswordScreen = () => {
  const route = useRoute<NewPasswordRouteProps>();
  const navigation = useNavigation<NewPasswordNavigationProp>();

  const {
    control,
    handleSubmit,
    formState: {isSubmitting},
  } = useForm<NewPasswordType>();

  const onSubmitPressed = async (data: NewPasswordType) => {
    try {
      await confirmResetPassword({
        confirmationCode: data.code,
        newPassword: data.password,
        username: route.params.email,
      });
      navigation.navigate('Sign in');
    } catch (err) {
      Alert.alert('Failed to confirm email', (err as Error).message);
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
          placeholder="Code"
          name="code"
          control={control}
          rules={{required: 'Code is required'}}
        />

        <FormInput
          placeholder="Enter your new password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />

        <CustomButton
          disabled={isSubmitting}
          text="Submit"
          onPress={handleSubmit(onSubmitPressed)}
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

export default NewPasswordScreen;
