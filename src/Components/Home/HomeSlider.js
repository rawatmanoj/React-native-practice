import React from 'react';
import {Image} from 'react-native-elements';
import {shortAnimeName} from '../../api/utils';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {deviceHeight} from '../../api/Constants';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

const HomeSlider = React.memo(
  ({compProp}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    //const anime = useSelector((state) => state.getAnime);
    // console.log(anime);

    console.log('Homeslider');

    const renderItem = ({item}) => {
      return (
        <View>
          <View style={styles.imageContainer}>
            <TouchableOpacity
              onPress={() => {
                dispatch({type: 'CURRENT_ANIME', payload: item.id});
                navigation.navigate('AnimeStacks');
              }}>
              <Image
                source={{uri: item.coverImage.medium}}
                style={styles.imageStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>
              {shortAnimeName(item.title.userPreferred, 20)}
            </Text>
          </View>
        </View>
      );
    };

    return (
      <SafeAreaView style={styles.container}>
        {/* <Text style={styles.propName}>{name}</Text> */}
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

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  propName: {
    color: 'white',
    fontSize: 22,
    marginLeft: deviceHeight * 0.02,
    fontFamily: 'Lato-Regular',
    marginBottom: deviceHeight * 0.02,
  },
  imageStyle: {
    width: 125,
    height: 150,
    borderRadius: 4,
  },
  imageViewContainer: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    // flex: 1,
  },
  titleStyle: {
    //flexShrink: 1,
    fontSize: 13,
    opacity: 0.8,
    marginTop: 5,
    marginLeft: deviceHeight * 0.02,
    color: 'rgba(255, 255, 255, 0.9)',
    fontFamily: 'Roboto-Bold',
    //color: 'white',
  },
  titleContainer: {
    width: 120,
  },
  imageContainer: {},
});

export default HomeSlider;
