import React, {useEffect, useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import HomeSlider from '../Components/Home/HomeSlider';
import {Context} from '../store/store';
import {deviceWidth, deviceHeight} from '../api/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import {TopAnime} from '../api/apicalls';

const HomeScreen = React.memo(({navigation}) => {
  const renders = React.useRef(0);
  console.log('HomeScreen' + renders.current++);
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    const fetchData = async () => {
      // const topAnime = await Top('anime', 'favorite');

      // url.then((res) => console.log(res)).catch((err) => console.log(err));
      // console.log(topManga);
      const topAnime = await TopAnime('ANIME', 'SCORE_DESC', 'TV');
      const topMovie = await TopAnime('ANIME', 'SCORE_DESC', 'MOVIE');
      const topManga = await TopAnime('MANGA', 'FAVOURITES_DESC', 'MANGA');
      const trendingAnime = await TopAnime('ANIME', 'TRENDING_DESC', 'TV');
      const trendingMovie = await TopAnime('ANIME', 'TRENDING_DESC', 'MOVIE');
      console.log(trendingAnime);
      dispatch({
        type: 'TOP',
        payload: {
          topAnime,
          trendingAnime,
          trendingMovie,
          topManga,
          topMovie,
        },
      });
    };

    fetchData();
  }, [dispatch]);
  return (
    <View style={styles.homeContainer}>
      <View style={styles.navbarConatiner}>
        <Text style={styles.appName}>someName</Text>
        <View style={styles.searchContainer}>
          <StatusBar backgroundColor="#191725" barStyle="light-content" />
          <TouchableOpacity>
            <Ionicons name={'search'} size={20} color={'grey'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name={'dots-three-vertical'} size={20} color={'grey'} />
          </TouchableOpacity>
        </View>
      </View>

      {state.top.topMovie ? (
        <ScrollView>
          <HomeSlider
            navigation={navigation}
            name={'Trending anime'}
            compProp={state.top.trendingAnime}
          />
          <HomeSlider
            navigation={navigation}
            name={'Trending Movie'}
            compProp={state.top.trendingMovie}
          />
          <HomeSlider
            navigation={navigation}
            name={'Top anime'}
            compProp={state.top.topAnime}
          />
          <HomeSlider
            navigation={navigation}
            name={'Top manga'}
            compProp={state.top.topManga}
          />
          <HomeSlider
            navigation={navigation}
            name={'Top movie'}
            compProp={state.top.topMovie}
          />
        </ScrollView>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#191725',
  },
  appName: {
    flex: 3,
    color: '#e84545',
    fontSize: deviceHeight * 0.042,
    marginLeft: deviceHeight * 0.02,
    fontFamily: 'Poppins-Regular',
    //fontWeight: 'bold',
  },
  searchContainer: {
    flex: 1,
    marginRight: deviceHeight * 0.012,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navbarConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: (deviceWidth * 100) / 100,
    height: (deviceHeight * 10) / 100,
    backgroundColor: '#191725',
    // backgroundColor: 'blue',

    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: 'black',
  },
});

export default HomeScreen;
