import React from 'react';
import {Image} from 'react-native-elements';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
  TouchableHighlight,
} from 'react-native';
import {deviceHeight} from '../../api/Constants';
import {NavigationContainer} from '@react-navigation/native';
import AnimeStack from '../../routes/AnimeStack';
const App = ({compProp, name, navigation}) => {
  console.log(navigation);
  // const [state] = useContext(Context);
  const renderItem = ({item}) => {
    return (
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('AnimeStack', {
            name: item.title,
          });
        }}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: item.image_url}}
            style={styles.imageStyle}
            resizeMode="contain"
          />

          <Text style={styles.titleStyle}>{item.title}</Text>
        </View>
      </TouchableHighlight>
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
    fontSize: 12,
    marginTop: 5,
    marginLeft: deviceHeight * 0.02,
    color: 'rgba(255, 255, 255, 0.9)',
    //color: 'white',
  },
});

export default App;
