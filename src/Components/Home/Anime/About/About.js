import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Context} from '../../../../store/store';
import {color} from 'react-native-reanimated';
import {Button} from 'react-native-elements';
import {deviceWidth, deviceHeight} from '../../../../api/Constants';
import {filterString} from '../../../../api/utils';
import {Description} from '../../../../api/Description';
export default function About() {
  const [state] = useContext(Context);

  return (
    <ScrollView style={styles.scene}>
      {state.currentAnimeInfo ? (
        <View>
          <View>
            {state.currentAnimeInfo.description ? (
              <Description
                text={filterString(state.currentAnimeInfo.description)}
              />
            ) : null}
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
                if (i < 7) {
                  return (
                    <Button
                      key={i}
                      buttonStyle={{
                        backgroundColor: '#333041',
                        margin: 4,
                      }}
                      title={genre}
                    />
                  );
                }
              })}
            </View>
            <Text
              style={{
                color: 'grey',
                fontSize: 16,
                marginTop: 20,
                marginBottom: 10,
                fontFamily: 'Lato-Bold',
              }}>
              Producers
            </Text>
            <View
              style={{
                flexDirection: 'row',
                overflow: 'visible',
                flexWrap: 'wrap',
              }}>
              {state.currentAnimeInfo.studios.nodes.map((studio, i) => {
                return (
                  <Button
                    key={i}
                    buttonStyle={{
                      backgroundColor: '#333041',
                      margin: 4,
                    }}
                    title={studio.name}
                  />
                );
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
    width: deviceWidth,
    padding: 10,
    flex: 1,
    backgroundColor: '#191725',
  },
});
