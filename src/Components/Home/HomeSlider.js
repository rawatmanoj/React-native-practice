import React, {useContext} from 'react';
import {Image} from 'react-native-elements';
import {shortAnimeName} from '../../api/utils';
//import ProgressiveImage from '../../api/progressive-image';
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
import {Context} from '../../store/store';

const HomeSlider = ({compProp, name, navigation}) => {
  const [state, dispatch] = useContext(Context);
  console.log('homeslider');
  const renderItem = ({item}) => {
    return (
      <View style={styles.imageViewContainer}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => {
              console.log('HomeSlider');
              dispatch({type: 'CURRENT_ANIME', payload: item.mal_id});
              navigation.navigate('AnimeStack');
            }}>
            <Image
              source={{uri: item.image_url}}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>
            {shortAnimeName(item.title, 20)}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.propName}>{name}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={compProp}
        renderItem={renderItem}
        keyExtractor={(item) => {
          //  console.log(item);
          return item.mal_id.toString();
        }}
      />
    </SafeAreaView>
  );
};

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
    justifyContent: 'center',
    alignItems: 'center',
    width: 125,
    height: 150,
    borderRadius: 8,
  },
  imageViewContainer: {
    // backgroundColor: 'red',
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
