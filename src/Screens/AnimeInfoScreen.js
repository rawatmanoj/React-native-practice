/* eslint-disable react/self-closing-comp */
import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import axios from 'axios';
import {Context} from '../store/store';
import {Image} from 'react-native-elements';
import {deviceHeight, deviceWidth} from '../api/Constants';
import LinearGradient from 'react-native-linear-gradient';
import {shortAnimeName} from '../api/utils';
import AnimeTabView from '../Components/Home/Anime/TabView';
async function fetchAnime(id) {
  // console.log(id);
  try {
    const res = await axios(`https://api.jikan.moe/v3/anime/${id}`);
    return res.data;
  } catch (err) {
    return console.log(err);
  }
}

const AnimeInfoScreen = () => {
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    const fetchData = async () => {
      // console.log(state.currentAnime);
      const animeInfo = await fetchAnime(state.currentAnime);
      dispatch({type: 'CURRENT_ANIME_INFO', payload: animeInfo});
    };

    fetchData();
  }, [state.currentAnime, dispatch]);
  console.log(state.currentAnimeInfo);
  return (
    <View style={styles.pageContainer}>
      <View style={styles.animeContainer}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        {state.currentAnimeInfo ? (
          // eslint-disable-next-line react/self-closing-comp
          <View>
            <ImageBackground
              source={{uri: state.currentAnimeInfo.image_url}}
              style={styles.imageBackgroundStyle}
              resizeMode="cover"
              blurRadius={0.5}>
              <LinearGradient
                colors={['transparent', '#191724']}
                start={{x: 0.5, y: 0.5}}
                style={styles.container1}></LinearGradient>
            </ImageBackground>
            <View style={styles.smallImage}>
              <Image
                source={{uri: state.currentAnimeInfo.image_url}}
                style={styles.imageStyle}
                resizeMode="contain"></Image>
            </View>
          </View>
        ) : null}
        {state.currentAnimeInfo ? (
          <View style={styles.lowerPart}>
            <View style={styles.animeNameView}>
              <Text style={styles.animeNameStyle}>
                {shortAnimeName(state.currentAnimeInfo.title, 30)}
              </Text>
              <Text style={styles.dateStyle}>
                {state.currentAnimeInfo.aired.prop.from.year + ' | '}
                {state.currentAnimeInfo.status}
              </Text>
            </View>
          </View>
        ) : null}
        <View
          style={{
            alignItems: 'center',

            // backgroundColor: 'red',
            height: deviceHeight * 0.1,
            //  width: deviceWidth / 1.14,
            width: deviceWidth,
            justifyContent: 'center',
            // alignItems: 'flex-start',
          }}>
          {/* <Ionicons
            // style={{}}
            name={'star'}
            size={40}
            color={'grey'}
          /> */}
          <Text
            style={{color: '#00adb5', fontFamily: 'Lato-Bold', fontSize: 25}}>
            Rank 1
          </Text>
        </View>
      </View>
      <View style={styles.navStyles}>
        <AnimeTabView />
      </View>
    </View>
  );
};

export default AnimeInfoScreen;

const styles = StyleSheet.create({
  imageBackgroundStyle: {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: deviceWidth,
    height: deviceWidth * 0.5,
    // blurRadius: '1',
  },
  imageStyle: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 122,
    height: 150,
    borderRadius: 8,
  },
  pageContainer: {
    flex: 1,
  },
  smallImage: {
    // position: 'relative',
    position: 'absolute',
    left: deviceWidth / 2 - 185,
    top: deviceHeight * 0.18,
  },
  container1: {
    flex: 1,
  },
  animeNameStyle: {
    // alignSelf: 'flex-end',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    //fontWeight: '700',
  },
  lowerPart: {
    marginTop: 13,
    width: deviceWidth,
    alignItems: 'center',
  },
  animeNameView: {
    width: deviceWidth / 2,
    marginRight: deviceWidth * 0.14,
    alignSelf: 'flex-end',
    // alignItems: 'flex-end',
  },
  dateStyle: {
    color: 'grey',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
  },
  navStyles: {
    flex: 3,
  },
  animeContainer: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: '#191725',
  },
});
