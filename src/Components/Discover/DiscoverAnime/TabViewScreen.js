import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default function TabViewScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('AnimeInfoScreen');
          navigation.push('AnimeInfoScreen');
        }}>
        <View>
          <Text>TabViewScreen</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
