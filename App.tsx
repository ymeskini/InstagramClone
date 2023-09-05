import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import fonts from './src/theme/fonts';
import colors from './src/theme/colors';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.post}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
            }}
          />
          <Text style={styles.username}>ymeskini</Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            style={styles.threeDots}
          />
        </View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
          }}
        />

        <View style={styles.footer}>
          <View style={styles.iconContainer}>
            <AntDesign
              name={'hearto'}
              size={24}
              style={styles.icon}
              color={colors.black}
            />
            <Ionicons
              name="chatbubble-outline"
              size={24}
              style={styles.icon}
              color={colors.black}
            />
            <Feather
              name="send"
              size={24}
              style={styles.icon}
              color={colors.black}
            />
            <Feather
              name="bookmark"
              size={24}
              style={styles.bookmark}
              color={colors.black}
            />
          </View>

          <Text style={styles.text}>
            Liked by <Text style={styles.bold}>lgrinevic</Text> and{' '}
            <Text style={styles.bold}>45,678 others</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.bold}>ymeskini</Text> Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Nam tempore alias eos doloribus
            consequatur delectus iste debitis placeat, dolorum unde distinctio
            doloremque velit ducimus, blanditiis quibusdam. Provident,
            repudiandae minus. Cum.
          </Text>

          <Text>View all 16 comments</Text>
          <View style={styles.comment}>
            <Text style={styles.commentText}>
              <Text style={styles.bold}>ymeskini</Text> Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </Text>
            <AntDesign name="hearto" style={styles.icon} color={colors.black} />
          </View>
          <Text>19 August, 2023</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
  bookmark: {marginLeft: 'auto'},
  footer: {
    padding: 10,
  },
  bold: {fontWeight: fonts.weight.bold},
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
  },
});

export default App;
