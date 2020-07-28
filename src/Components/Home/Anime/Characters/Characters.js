import React, {useEffect, useState} from 'react';
import {Image} from 'react-native-elements';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../../../../store/store';
import {getChar} from '../../../../api/apicalls';
import {useSelector} from 'react-redux';
export default function Characters() {
  console.log('characters');
  // const [state] = useContext(Context);
  const [char, setChar] = useState(null);
  const anime = useSelector((state) => state.getAnime);
  useEffect(() => {
    const fetchChar = async () => {
      const characters = await getChar(anime.currentAnime);
      setChar(characters.Media.characters.nodes);
      console.log(characters);
    };

    fetchChar();
  }, [anime.currentAnime]);

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={{width: 10, height: 10}}>
          {/* <TouchableOpacity onPress={() => {}}> */}
          <Image
            source={{uri: item.image.medium}}
            style={{flex: 1, width: '100%'}}
            resizeMode="contain"
          />
          {/* </TouchableOpacity> */}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.propName}>{name}</Text> */}
      <FlatList
        showsHorizontalScrollIndicator={false}
        //  horizontal={true}
        data={char}
        renderItem={renderItem}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scene: {},
  container: {
    flex: 1,
    backgroundColor: '#191725',
  },
});
