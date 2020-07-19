import React, {useEffect, useContext} from 'react';
import api from 'jikanjs';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeSlider from '../Components/Home/HomeSlider';
import {Context} from '../store/store';
import {deviceWidth, deviceHeight} from '../api/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
function Top(type, subtype) {
  return axios(`https://api.jikan.moe/v3/top/${type}/1/${subtype}`)
    .then((res) => res.data.top)
    .catch((err) => console.log(err));
}

const HomeScreen = ({navigation}) => {
  console.log(navigation);
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    const fetchData = async () => {
      const topAnime = await Top('anime', 'favorite');
      const topManga = await Top('manga', 'favorite');
      const upcoming = await Top('anime', 'upcoming');
      const topMovie = await Top('anime', 'movie');
      const airing = await Top('anime', 'airing');
      // url.then((res) => console.log(res)).catch((err) => console.log(err));

      dispatch({type: 'TOPANIME', payload: topAnime});
      dispatch({type: 'TOPMANGA', payload: topManga});
      dispatch({type: 'TOPMOVIE', payload: topMovie});
      dispatch({type: 'UPCOMING', payload: upcoming});
      dispatch({type: 'AIRING', payload: airing});
      //  console.log(topAnime);
    };

    fetchData();
  }, [dispatch]);
  return (
    <View style={styles.homeContainer}>
      <View style={styles.navbarConatiner}>
        <Text style={styles.appName}>animenation</Text>
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Ionicons name={'search'} size={20} color={'grey'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name={'dots-three-vertical'} size={20} color={'grey'} />
          </TouchableOpacity>
        </View>
      </View>

      {state.topAnime &&
      state.topManga &&
      state.topMovie &&
      state.upcoming &&
      state.airing ? (
        <ScrollView>
          <HomeSlider
            navigation={navigation}
            name={'Top anime'}
            compProp={state.topAnime}
          />
          <HomeSlider
            navigation={navigation}
            name={'Top manga'}
            compProp={state.topManga}
          />
          <HomeSlider
            navigation={navigation}
            name={'Top movie'}
            compProp={state.topMovie}
          />
          <HomeSlider
            navigation={navigation}
            name={'Top upcoming'}
            compProp={state.upcoming}
          />
          <HomeSlider
            navigation={navigation}
            name={'Top airing'}
            compProp={state.airing}
          />
        </ScrollView>
      ) : null}
    </View>
  );
};

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
    elevation: 8,
    shadowColor: 'black',
  },
});

export default HomeScreen;
