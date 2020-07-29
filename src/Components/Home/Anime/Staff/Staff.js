import React, {useEffect, useState} from 'react';
import {Image} from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {getStaff} from '../../../../api/apicalls';
import {useSelector} from 'react-redux';
export default function Characters() {
  console.log('characters');
  // const [state] = useContext(Context);
  const [staff, setStaff] = useState(null);
  const anime = useSelector((state) => state.getAnime);
  useEffect(() => {
    const fetchChar = async () => {
      const staffs = await getStaff(anime.currentAnime);
      setStaff(staffs.Media.staff.nodes);
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
      {/* <Text style={styles.propName}>{name}</Text> */}
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={staff}
        renderItem={renderItem}
        keyExtractor={(item, i) => {
          return i.toString();
        }}
      />
    </SafeAreaView>
  );
}

const styles = EStyleSheet.create({
  scene: {},
  container: {
    flex: 1,
    backgroundColor: '#191725',
  },
  imageContainer: {
    // backgroundColor: 'red',
    marginBottom: 35,
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    overflow: 'hidden',
  },
  fullNameStyles: {
    marginLeft: 15,
    fontSize: 20,
    fontFamily: 'AlegreyaSans-Bold',
    color: 'white',
  },
  nativeNameStyles: {
    marginLeft: 15,
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    color: 'grey',
  },
});
