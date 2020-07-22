import React, {useContext, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import {Context} from '../store/store';
async function fetchAnime(id) {
  console.log(id);
  try {
    const res = await axios(`https://api.jikan.moe/v3/anime/${id}`);
    return res.data;
  } catch (err) {
    return console.log(err);
  }
}

const AnimeInfoScreen = (props) => {
  const [state] = useContext(Context);
  useEffect(() => {
    const fetchData = async () => {
      // console.log(state.currentAnime);
      const anime = await fetchAnime(state.currentAnime);
      console.log(anime);
    };
    // console.log(state);
    fetchData();
  }, [state.currentAnime]);
  return (
    <View>
      {/* <Image
            source={{uri: item.image_url}}
            style={styles.imageStyle}
            resizeMode="contain"
          /> */}
    </View>
  );
};

export default AnimeInfoScreen;

// import * as React from 'react';
// import {View, StyleSheet, Dimensions} from 'react-native';
// import {TabView, SceneMap} from 'react-native-tab-view';

// const FirstRoute = () => (
//   <View style={[styles.scene, {backgroundColor: '#ff4081'}]} />
// );

// const SecondRoute = () => (
//   <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
// );

// const initialLayout = {width: Dimensions.get('window').width};

// export default function AnimeInfoScreen() {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     {key: 'first', title: 'First'},
//     {key: 'second', title: 'Second'},
//   ]);

//   const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//   });

//   return (
//     <TabView
//       navigationState={{index, routes}}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={initialLayout}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   scene: {
//     flex: 1,
//   },
// });
