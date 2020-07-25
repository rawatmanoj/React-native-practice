import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Context} from '../../../../store/store';
import {color} from 'react-native-reanimated';
import {Button} from 'react-native-elements';
import {deviceWidth, deviceHeight} from '../../../../api/Constants';
export default function ABout() {
  const [state, dispatch] = useContext(Context);

  return (
    <ScrollView style={styles.scene}>
      {state.currentAnimeInfo ? (
        <View style={{margin: 15}}>
          <View>
            <Text
              style={{
                color: '#D7D2D2',
                fontSize: 15,
                fontFamily: 'Lato-Bold',
              }}>
              {state.currentAnimeInfo.background}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: 'grey',
                fontSize: 16,
                marginTop: 20,
                marginBottom: 10,
                fontFamily: 'Lato-Bold',
              }}>
              Genres
            </Text>
            <View
              style={{
                flexDirection: 'row',
                overflow: 'visible',
                flexWrap: 'wrap',
              }}>
              {state.currentAnimeInfo.genres.map((genre, i) => {
                if (i < 6) {
                  return (
                    <Button
                      key={i}
                      buttonStyle={{
                        backgroundColor: '#484559',
                        margin: 4,
                      }}
                      title={genre.name}
                    />
                  );
                }
              })}
            </View>
          </View>
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#191725',
  },
});
