import React from 'react';
import {Image} from 'react-native-elements';
import {shortAnimeName} from '../../api/utils';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {deviceHeight, deviceWidth} from '../../api/Constants';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const HomeSlider = React.memo(({compProp, name}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  console.log('Homeslider');

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('AnimeInfoScreen');
          navigation.navigate('AnimeInfoScreen', {
            params: {data: 'HomeSlider'},
          });
        }}>
        <View>
          <Text>HomeSlider</Text>
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
    marginTop: deviceHeight * 0.008,
    marginLeft: deviceWidth * 0.04,
    marginBottom: '25rem',
    color: 'rgba(255, 255, 255, 0.9)',
    fontFamily: 'Roboto-Bold',
  },
  titleContainer: {
    width: deviceWidth * 0.28,
  },
});
export default HomeSlider;
