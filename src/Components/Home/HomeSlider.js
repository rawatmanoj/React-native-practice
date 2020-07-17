import React, {useContext} from 'react';
import {Image, ListItem} from 'react-native-elements';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {Context} from '../../store/store';

const App = () => {
  const [state] = useContext(Context);
  const renderItem = ({item}) => {
    return (
      <View>
        <Image
          source={{uri: item.image_url}}
          style={{width: 200, height: 200}}
          resizeMode="contain"
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={state.topAnime}
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
});

export default App;
