import React from 'react';

import EStyleSheet from 'react-native-extended-stylesheet';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const SearchScreen = React.memo(({compProp, name}) => {
  const navigation = useNavigation();

  console.log('Homeslider');

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AnimeInfoScreen', {
            params: {data: 'search'},
          });
          //navigation.push('AnimeInfoScreen');
        }}>
        <View>
          <Text>SearchScreen</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
});

const styles = EStyleSheet.create({
  propName: {
    color: 'white',
    fontSize: '20rem',
    // marginLeft: deviceWidth * 0.04,
    marginLeft: '15rem',
    fontFamily: 'Roboto-Bold',
    marginBottom: '15rem',
    marginTop: '15rem',
  },
  imageStyle: {
    // width: '88rem',
    height: '124rem',
    aspectRatio: 0.8,
    marginLeft: '15rem',
    borderRadius: 10,
  },
  imageViewContainer: {
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: '12.5rem',
    opacity: 0.8,

    color: 'rgba(255, 255, 255, 0.9)',
    fontFamily: 'Roboto-Bold',
  },
  titleContainer: {},
});
export default SearchScreen;
