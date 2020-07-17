import React, {useEffect, useContext} from 'react';
import api from 'jikanjs';
import {View, Text, StyleSheet} from 'react-native';
import HomeSlider from '../Components/Home/HomeSlider';
import {Context} from '../store/store';
import {deviceWidth, deviceHeight} from '../api/Constants';

import axios from 'axios';
function Top(type, subtype) {
  return axios(`https://api.jikan.moe/v3/top/${type}/1/${subtype}`).then(
    (res) => res.data.top,
  );
}

const HomeScreen = () => {
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    const fetchData = async () => {
      const topAnime = await Top('anime', 'favorite');
      const topManga = await Top('manga', 'favorite');
      const upcoming = await Top('anime', 'upcoming');
      const topMovie = await Top('anime', 'movie');
      const airing = await Top('anime', 'airing');
      // url.then((res) => console.log(res)).catch((err) => console.log(err));
      console.log(topAnime);
      dispatch({type: 'TOPANIME', payload: topAnime});
    };

    fetchData();
  }, [dispatch]);
  return (
    <View style={styles.homeContainer}>
      <View style={styles.navbarConatiner} />
      <HomeSlider />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#252a34',
  },
  navbarConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (deviceWidth * 100) / 100,
    height: (deviceHeight * 10) / 100,
    //backgroundColor: '#252a34',
    backgroundColor: 'blue',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
});

export default HomeScreen;
