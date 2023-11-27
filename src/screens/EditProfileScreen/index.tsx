import React, {FC} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import user from '../../data/user.json';

type CustomInputProps = {
  label: string;
  multiline?: boolean;
};

const CustomInput: FC<CustomInputProps> = ({label, multiline = false}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        multiline={multiline}
        style={styles.input}
        placeholder="Hello"
      />
    </View>
  );
};

export const EditProfileScreen = () => {
  const onSubmit = () => {};
  return (
    <View style={styles.page}>
      <Image
        style={styles.avatar}
        source={{
          uri: user.image,
        }}
      />
      <Text style={styles.textButton}>Change profile photo</Text>
      <CustomInput label="Name" />
      <CustomInput label="Username" />
      <CustomInput label="Website" />
      <CustomInput label="Bio" />

      <Text onPress={onSubmit} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};
