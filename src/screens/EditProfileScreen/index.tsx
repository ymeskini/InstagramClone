import React, {FC, useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {Control, Controller, RegisterOptions, useForm} from 'react-hook-form';
import {Asset, launchImageLibrary} from 'react-native-image-picker';

import {styles} from './styles';
import user from '../../data/user.json';
import {IUser} from '../../types/models';
import colors from '../../theme/colors';
import {WEBSITE_REGEX} from '../../constants/regex';

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
  const [selectedImage, setSelectedImage] = useState<Asset | null>(null);
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

  const onChangePhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      ({didCancel, errorCode, assets}) => {
        if (!didCancel && !errorCode && assets) {
          setSelectedImage(assets[0]);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Image
        style={styles.avatar}
        source={{
          uri: selectedImage?.uri || user.image,
        }}
      />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change profile photo
      </Text>
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
            value: WEBSITE_REGEX,
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
