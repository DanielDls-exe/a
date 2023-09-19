
import React from 'react';
import { StatusBar, View, StyleSheet, Platform } from 'react-native';

type CustomStatusBarProps = {
  backgroundColor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
};

const CustomStatusBar: React.FC<CustomStatusBarProps> = ({
  backgroundColor = 'white',
  barStyle = 'dark-content',
}) => {
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar translucent backgroundColor={backgroundColor} barStyle={barStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  },
});

export default CustomStatusBar;
