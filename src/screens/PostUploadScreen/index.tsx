import {Camera, CameraType, FlashMode, VideoQuality} from 'expo-camera';
import React, {useEffect, useRef, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';
import colors from '../../theme/colors';

const FLASH_MODES = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

const FLASH_MODE_NAMES = ['flash-off', 'flash-on', 'flash-auto', 'highlight'];

const DEFAULT_INDEX = 0;

export const PostUploadScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [flashMode, setFlashMode] = useState(DEFAULT_INDEX);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const cameraRef = useRef<Camera | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      const {status: audioStatus} =
        await Camera.requestMicrophonePermissionsAsync();

      setHasPermission(status === 'granted' && audioStatus === 'granted');
    })();
  }, []);

  const flipCamera = () => {
    setCameraType(currentCameraType =>
      currentCameraType === CameraType.back
        ? CameraType.front
        : CameraType.back,
    );
  };

  const toggleFlash = () => {
    setFlashMode(flashIndex => {
      if (flashIndex === FLASH_MODES.length - 1) {
        return DEFAULT_INDEX;
      }
      return flashIndex + 1;
    });
  };

  const takePicture = async () => {
    if (!cameraRef.current || !isCameraReady) {
      return;
    }

    const picture = await cameraRef.current.takePictureAsync({
      quality: 0.5,
      base64: false,
      skipProcessing: true,
    });

    if (picture) {
      console.log(picture.uri);
    }
  };

  const startRecording = async () => {
    if (cameraRef.current && isCameraReady) {
      setIsRecording(true);
      try {
        const video = await cameraRef.current.recordAsync({
          quality: VideoQuality['480p'],
          maxDuration: 60,
          maxFileSize: 10 * 1024 * 1024,
          mute: false,
        });
        console.log(video.uri);
      } catch (e) {
        console.error(e);
      } finally {
        setIsRecording(false);
      }
    }
  };

  const stopRecording = () => {
    if (cameraRef.current && isRecording) {
      cameraRef.current.stopRecording();
      setIsCameraReady(false);
    }
  };

  if (hasPermission === null) {
    return <Text>Loading...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.page}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={cameraType}
        flashMode={FLASH_MODES[flashMode]}
        onCameraReady={() => setIsCameraReady(true)}
        ratio="4:3"
      />
      <View style={[styles.buttonsContainer, {top: 25}]}>
        <MaterialIcons name="close" size={30} color={colors.black} />
        <Pressable onPress={toggleFlash}>
          <MaterialIcons
            name={FLASH_MODE_NAMES[flashMode]}
            size={30}
            color={colors.black}
          />
        </Pressable>
        <MaterialIcons name="settings" size={30} color={colors.black} />
      </View>
      <View style={[styles.buttonsContainer, {bottom: 25}]}>
        <MaterialIcons name="photo-library" size={30} color={colors.black} />
        {isCameraReady && (
          <Pressable
            onLongPress={startRecording}
            onPress={takePicture}
            onPressOut={stopRecording}>
            <View
              style={[
                styles.circle,
                {backgroundColor: isRecording ? colors.accent : colors.black},
              ]}
            />
          </Pressable>
        )}
        <Pressable onPress={flipCamera}>
          <MaterialIcons
            name="flip-camera-ios"
            size={30}
            color={colors.black}
          />
        </Pressable>
      </View>
    </View>
  );
};
