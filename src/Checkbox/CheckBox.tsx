import {Animated, Pressable, StyleSheet} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {image} from './utils/consts';
import {darkerRgb, hexToRgb} from './utils/helpers';
import {COLOR_SCHEME, ICheckBoxProps} from './utils/types';

/*
 * @param colorScheme - color scheme of the checkbox
 * @param isChecked - state of the checkbox, it can be true or false
 * @param onChange - function that will be called when the checkbox is pressed
 * @param iconColor - color of the icon inside the checkbox, if not provided it will be black or white depending on the colorScheme, it can be any color in hex format like #000000
 * @param customColor - color of the checkbox, if not provided it will be black or white depending on the colorScheme, it can be any color in hex format like #000000
 * @param size - size of the checkbox, it can be any number
 */

const CheckBox: FC<ICheckBoxProps> = (props) => {
  const {
    colorScheme = 'black',
    isChecked,
    onChange,
    iconColor,
    customColor,
    size = 16,
  } = props;
  const [scale] = useState(new Animated.Value(0));
  const [color] = useState(new Animated.Value(0));
  const [border] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isChecked) {
      Animated.delay(300).start(() => {
        Animated.timing(scale, {
          toValue: 1,
          duration: 350,
          useNativeDriver: true,
        }).start();
      });
      Animated.timing(color, {
        toValue: 1,
        duration: 350,
        useNativeDriver: false,
      }).start();
      Animated.timing(border, {
        toValue: 1,
        duration: 350,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(scale, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }).start();
      Animated.delay(300).start(() => {
        Animated.timing(color, {
          toValue: 0,
          duration: 350,
          useNativeDriver: false,
        }).start();
      });
      Animated.timing(border, {
        toValue: 0,
        duration: 350,
        useNativeDriver: false,
      }).start();
    }
  }, [isChecked]);

  const backgroundColor = color.interpolate({
    inputRange: [0, 1],
    outputRange: [
      hexToRgb('#ffffff'),
      hexToRgb(
        customColor
          ? darkerRgb(customColor, 20)
          : COLOR_SCHEME[colorScheme].dark,
      ),
    ],
  });

  const borderColor = border.interpolate({
    inputRange: [0, 1],
    outputRange: [
      hexToRgb(
        customColor
          ? darkerRgb(customColor, 20)
          : COLOR_SCHEME[colorScheme].dark,
      ),
      hexToRgb(customColor ? customColor : COLOR_SCHEME[colorScheme].light),
    ],
  });

  return (
    <Pressable
      onPress={() => {
        onChange();
      }}>
      <Animated.View
        style={[
          {backgroundColor, borderColor},
          {
            borderWidth: size * (3 / 16),
            borderRadius: size * (6 / 16),
          },
          styles.button,
        ]}>
        <Animated.Image
          source={{uri: image, width: size, height: size}}
          style={[
            {transform: [{scale: scale}]},
            {
              borderRadius: size * (3 / 16),
            },
            {
              tintColor:
                (!iconColor && (colorScheme === 'white' ? '#000' : '#fff')) ||
                iconColor,
            },
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};

export {CheckBox};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
