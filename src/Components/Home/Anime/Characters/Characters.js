import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {getChar} from '../../../../api/apicalls';
import {useSelector} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
export default function Characters() {
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
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.imageContainer}>
          <View>
            <ImageBackground
              source={{uri: item.image.medium}}
              style={styles.imageStyles}
              resizeMode="cover"
            />
          </View>
          <View>
            <Text style={styles.fullNameStyles}>{item.name.full}</Text>
            <Text style={styles.nativeNameStyles}>{item.name.native}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={char}
        renderItem={renderItem}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
      />
    </SafeAreaView>
  );
}

const styles = EStyleSheet.create({
  scene: {},
  container: {
    flex: 1,
    backgroundColor: '$baseColor',
  },
  imageContainer: {
    marginBottom: '35rem',
    marginLeft: '20rem',
    marginTop: '20rem',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyles: {
    width: '68rem',
    height: '68rem',
    borderRadius: 69 / 2,
    overflow: 'hidden',
  },
  fullNameStyles: {
    marginLeft: '15rem',
    fontSize: '20rem',
    fontFamily: 'AlegreyaSans-Bold',
    color: 'white',
  },
  nativeNameStyles: {
    marginLeft: '15rem',
    fontSize: '14rem',
    fontFamily: 'Lato-Bold',
    color: 'grey',
  },
});
