import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import {Button} from 'react-native-elements';
import {deviceWidth} from '../../../../api/Constants';
import {filterString} from '../../../../api/utils';
import {Description} from '../../../../api/Description';
import {useSelector} from 'react-redux';
export default function About() {
  // const [state] = useContext(Context);
  const anime = useSelector((state) => state.getAnime);
  console.log('About');

  return (
    <ScrollView style={styles.scene}>
      {anime.currentAnimeInfo ? (
        <View>
          <View>
            {anime.currentAnimeInfo.description ? (
              <Description
                text={filterString(anime.currentAnimeInfo.description)}
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
              {anime.currentAnimeInfo.genres.map((genre, i) => {
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
              {anime.currentAnimeInfo.studios.nodes.map((studio, i) => {
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
          <View style={{marginTop: 12, marginBottom: 10}}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                marginTop: 20,
                marginBottom: 20,
                fontFamily: 'Lato-Bold',
              }}>
              Anime Info
            </Text>
            <View
              style={{
                width: deviceWidth / 1.06,
                flexDirection: 'row',
                justifyContent: 'space-between',

                marginBottom: 20,
              }}>
              <Text
                style={{
                  color: '#605D74',
                  fontSize: 16,
                  fontFamily: 'Lato-Bold',
                }}>
                Original Title
              </Text>
              <View style={{width: deviceWidth / 2.1}}>
                <Text style={{color: '#EAE4E4', fontFamily: 'Lato-Bold'}}>
                  {anime.currentAnimeInfo.title.userPreferred}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: deviceWidth / 1.06,
                marginBottom: 20,
              }}>
              <Text
                style={{
                  color: '#605D74',
                  fontSize: 16,
                  fontFamily: 'Lato-Bold',
                }}>
                First Air Date
              </Text>
              <View style={{width: deviceWidth / 2.1}}>
                <Text style={{color: '#EAE4E4', fontFamily: 'Lato-Bold'}}>
                  {anime.currentAnimeInfo.startDate.day +
                    ' - ' +
                    anime.currentAnimeInfo.startDate.month +
                    ' - ' +
                    anime.currentAnimeInfo.startDate.year}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: deviceWidth / 1.06,
                marginBottom: 20,
              }}>
              <Text
                style={{
                  color: '#605D74',
                  fontSize: 16,
                  fontFamily: 'Lato-Bold',
                }}>
                Last Air Date
              </Text>
              <View style={{width: deviceWidth / 2.1}}>
                <Text style={{color: '#EAE4E4', fontFamily: 'Lato-Bold'}}>
                  {anime.currentAnimeInfo.endDate.day
                    ? anime.currentAnimeInfo.endDate.day +
                      ' - ' +
                      anime.currentAnimeInfo.endDate.month +
                      ' - ' +
                      anime.currentAnimeInfo.endDate.year
                    : 'Ongoing'}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: deviceWidth / 1.06,
                flexDirection: 'row',
                justifyContent: 'space-between',

                marginBottom: 20,
              }}>
              <Text
                style={{
                  color: '#605D74',
                  fontSize: 16,
                  fontFamily: 'Lato-Bold',
                }}>
                Aired Episodes
              </Text>
              <View style={{width: deviceWidth / 2.1}}>
                <Text style={{color: '#EAE4E4', fontFamily: 'Lato-Bold'}}>
                  {anime.currentAnimeInfo.episodes
                    ? anime.currentAnimeInfo.episodes
                    : 'Ongoing'}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: deviceWidth / 1.06,
                flexDirection: 'row',
                justifyContent: 'space-between',

                marginBottom: 20,
              }}>
              <Text
                style={{
                  color: '#605D74',
                  fontSize: 16,
                  fontFamily: 'Lato-Bold',
                }}>
                Country of origin
              </Text>
              <View style={{width: deviceWidth / 2.1}}>
                <Text style={{color: '#EAE4E4', fontFamily: 'Lato-Bold'}}>
                  {anime.currentAnimeInfo.countryOfOrigin === 'JP'
                    ? 'JAPAN'
                    : anime.currentAnimeInfo.countryOfOrigin}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: deviceWidth / 1.06,
                flexDirection: 'row',
                justifyContent: 'space-between',

                marginBottom: 20,
              }}>
              <Text
                style={{
                  color: '#605D74',
                  fontSize: 16,
                  fontFamily: 'Lato-Bold',
                }}>
                Average Score
              </Text>
              <View style={{width: deviceWidth / 2.1}}>
                <Text
                  style={{
                    color: '#EAE4E4',
                    fontSize: 15,
                    fontFamily: 'Lato-Bold',
                  }}>
                  {anime.currentAnimeInfo.averageScore}
                </Text>
              </View>
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
