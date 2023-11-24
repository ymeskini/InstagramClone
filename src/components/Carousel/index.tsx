import React, {FC, MutableRefObject, useRef, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  ViewToken,
} from 'react-native';

import {DoublePress} from '../DoublePress';
import {styles} from './styles';
import colors from '../../theme/colors';

type CarouselProps = {
  images: string[];
  onDoublePress: () => void;
};

const viewabilityConfig = {
  itemVisiblePercentThreshold: 51,
};

export const Carousel: FC<CarouselProps> = ({images, onDoublePress}) => {
  const {width} = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  const widthStyle = {width};

  const onViewableItemsChanged: MutableRefObject<
    (info: {viewableItems: Array<ViewToken>; changed: Array<ViewToken>}) => void
  > = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index!);
    }
  });

  return (
    <View>
      <FlatList
        pagingEnabled
        horizontal
        data={images}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
        renderItem={({item}) => (
          <DoublePress onDoublePress={onDoublePress}>
            <Image
              style={[widthStyle, styles.image]}
              source={{
                uri: item,
              }}
            />
          </DoublePress>
        )}
      />
      <View style={[styles.dotContainer, widthStyle]}>
        {images.map((src, index) => (
          <View
            key={src}
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === activeIndex ? colors.primary : colors.white,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};
