import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
function DiscoverAnime() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AnimeInfoScreen', {
            params: {data: 'discover'},
          });
          // navigation.push('AnimeInfoScreen');
        }}>
        <Text>DiscoverAnime</Text>
      </TouchableOpacity>
    </View>
  );
}
export default DiscoverAnime;
const styles = StyleSheet.create({});
