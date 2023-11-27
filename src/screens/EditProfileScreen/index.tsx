import React, {FC} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import user from '../../data/user.json';
import {Control, Controller, RegisterOptions, useForm} from 'react-hook-form';
import {IUser} from '../../types/models';
import colors from '../../theme/colors';

type IEditableUser = Omit<IUser, 'posts' | 'id' | 'image'>;

type CustomInputProps = {
  label: string;
  multiline?: boolean;
  control: Control<IEditableUser>;
  name: keyof IEditableUser;
  rules?:
    | Omit<
        RegisterOptions<IEditableUser, keyof IEditableUser>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
};

const CustomInput: FC<CustomInputProps> = ({
  label,
  multiline = false,
  control,
  name,
  rules,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{label}</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                autoCapitalize="none"
                multiline={multiline}
                style={[
                  styles.input,
                  {
                    borderColor: error ? colors.error : colors.border,
                  },
                ]}
                placeholder={label}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {error && (
                <Text style={{color: colors.error}}>{error.message}</Text>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

export const EditProfileScreen = () => {
  const {control, handleSubmit} = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio,
    },
  });
  const onSubmit = (data: IEditableUser) => {
    console.log(data);
  };

  return (
    <View style={styles.page}>
      <Image
        style={styles.avatar}
        source={{
          uri: user.image,
        }}
      />
      <Text style={styles.textButton}>Change profile photo</Text>
      <CustomInput
        rules={{
          required: 'Name is required',
        }}
        control={control}
        label="Name"
        name="name"
      />
      <CustomInput
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username must be at least 3 characters',
          },
        }}
        control={control}
        label="Username"
        name="username"
      />
      <CustomInput
        rules={{
          required: 'Website is required',
          pattern: {
            value: /http(s)?:\/\/([\w-]+.)+[\w-]+(\/[\w- ./?%&=])?/,
            message: 'Invalid website',
          },
        }}
        control={control}
        label="Website"
        name="website"
      />
      <CustomInput
        rules={{
          maxLength: {
            value: 200,
            message: 'Bio must be at most 200 characters',
          },
        }}
        control={control}
        label="Bio"
        name="bio"
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};
