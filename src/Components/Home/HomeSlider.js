import React from 'react';
import {Image} from 'react-native-elements';
import {shortAnimeName} from '../../api/utils';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {deviceHeight, deviceWidth} from '../../api/Constants';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const HomeSlider = React.memo(
  ({compProp, name}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    console.log('Homeslider');

    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          onPress={() => {
            dispatch({type: 'CURRENT_ANIME', payload: item.id});
            // navigation.navigate('AnimeInfoScreen');
            navigation.push('AnimeInfoScreen');
          }}>
          <Image
            source={{uri: item.coverImage.large}}
            style={styles.imageStyle}
            resizeMode="cover"
          />

          <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>
              {shortAnimeName(item.title.userPreferred, 20)}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.propName}>{name}</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={compProp.Page.media}
          renderItem={renderItem}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
        />
      </SafeAreaView>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.compProp !== nextProps.compProp) {
      return false;
    }
    return true;
  },
);

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
