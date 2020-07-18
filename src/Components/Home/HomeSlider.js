import React from 'react';
import {Image} from 'react-native-elements';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';
import {deviceHeight} from '../../api/Constants';

const App = ({compProp, name}) => {
  console.log(compProp);
  // const [state] = useContext(Context);
  const renderItem = ({item}) => {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{uri: item.image_url}}
          style={styles.imageStyle}
          resizeMode="contain"
        />

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
    width: 154,
    height: 200,
    borderRadius: 8,
  },
  imageContainer: {
    width: 154,
    margin: 2,
    opacity: 0.8,
  },
  titleStyle: {
    //flexShrink: 1,
    marginTop: 5,
    marginLeft: deviceHeight * 0.02,
    color: 'rgba(255, 255, 255, 0.9)',
    //color: 'white',
  },
});

export default App;
