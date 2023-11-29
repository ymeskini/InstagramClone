# AWS Amplify
The app is using amplify to manage the backend.
Get Started with amplify [here](https://docs.amplify.aws/react-native/start/getting-started/introduction/) 

# Deep linking
You can redirect users to the app from a website or another app using deep linking.
The routes are defined in `src/navigation/index.tsx`

To open the app with route params you can use `uri-scheme` package as follow:
```shell
npx uri-scheme open instagramclone://comments --android
npx uri-scheme open instagramclone://comments --ios
```