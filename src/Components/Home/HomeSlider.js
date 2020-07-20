import React from 'react';
import {Image} from 'react-native-elements';
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
const App = ({compProp, name, navigation}) => {
  // console.log(navigation);
  // const [state] = useContext(Context);
  const renderItem = ({item}) => {
    return (
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log(item);
            navigation.navigate('AnimeStack', {
              id: item.mal_id,
              type: item.type,
            });
          }}>
          <Image
            source={{uri: item.image_url}}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.titleStyle}>{item.title}</Text>
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
    width: 122,
    height: 150,
    borderRadius: 8,
  },
  imageContainer: {
    width: 120,
    // margin: 2,
    // opacity: 0.8,
    // backgroundColor: 'red',
  },
  titleStyle: {
    //flexShrink: 1,
    fontSize: 13,
    opacity: 0.8,
    marginTop: 5,
    marginLeft: deviceHeight * 0.02,
    color: 'rgba(255, 255, 255, 0.9)',
    fontFamily: 'Lato-Regular',
    //color: 'white',
  },
});

export default App;
