import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Characters() {
  return (
    <View style={styles.scene}>
      <Text>Characters</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#191725',
  },
});
