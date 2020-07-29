/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import {Button} from 'react-native-elements';
import {deviceWidth} from '../../../../api/Constants';
import {filterString} from '../../../../api/utils';
import {Description} from '../../../../api/Description';
import {useSelector} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
export default function About() {
  // const [state] = useContext(Context);
  const anime = useSelector((state) => state.getAnime);

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
            <Text style={styles.subHeading}>Genres</Text>
            <View style={styles.boxStyle}>
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
            <Text style={styles.subHeading}>Producers</Text>
            <View style={styles.boxStyle}>
              {anime.currentAnimeInfo.studios.nodes.map((studio, i) => {
                return (
                  <Button
                    key={i}
                    buttonStyle={{backgroundColor: '#333041', margin: 4}}
                    title={studio.name}
                  />
                );
              })}
            </View>
          </View>
          <View style={styles.animeInfoContainer}>
            <Text style={styles.animeInfoHeader}>Anime Info</Text>
            <View style={styles.subAnimeInfoContainer}>
              <Text style={styles.subAnimeInfoHeading}>Original Title</Text>
              <View style={{width: deviceWidth / 2.1}}>
                <Text style={styles.titleStyles}>
                  {anime.currentAnimeInfo.title.userPreferred}
                </Text>
              </View>
            </View>
            <View style={styles.subAnimeInfoContainer}>
              <Text style={styles.subAnimeInfoHeading}>First Air Date</Text>
              <View style={{width: deviceWidth / 2.1}}>
                <Text style={styles.titleStyles}>
                  {anime.currentAnimeInfo.startDate.day +
                    ' - ' +
                    anime.currentAnimeInfo.startDate.month +
                    ' - ' +
                    anime.currentAnimeInfo.startDate.year}
                </Text>
              </View>
            </View>
            <View style={styles.subAnimeInfoContainer}>
              <Text style={styles.subAnimeInfoHeading}>Last Air Date</Text>
              <View style={{width: deviceWidth / 2.1}}>
                <Text style={styles.titleStyles}>
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
            <View style={styles.subAnimeInfoContainer}>
              <Text style={styles.subAnimeInfoHeading}>Aired Episodes</Text>
              <View style={{width: deviceWidth / 2.1}}>
                <Text style={styles.titleStyles}>
                  {anime.currentAnimeInfo.episodes
                    ? anime.currentAnimeInfo.episodes
                    : 'Ongoing'}
                </Text>
              </View>
            </View>
            <View style={styles.subAnimeInfoContainer}>
              <Text style={styles.subAnimeInfoHeading}>Country of origin</Text>
              <View style={{width: deviceWidth / 2.1}}>
                <Text style={styles.titleStyles}>
                  {anime.currentAnimeInfo.countryOfOrigin === 'JP'
                    ? 'JAPAN'
                    : anime.currentAnimeInfo.countryOfOrigin}
                </Text>
              </View>
            </View>
            <View style={styles.subAnimeInfoContainer}>
              <Text style={styles.subAnimeInfoHeading}>Average Score</Text>
              <View style={{width: deviceWidth / 2.1}}>
                <Text style={styles.titleStyles}>
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

const styles = EStyleSheet.create({
  scene: {
    width: deviceWidth,
    padding: 10,
    flex: 1,
    backgroundColor: '#191725',
  },
  subHeading: {
    color: 'grey',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'Lato-Bold',
  },
  boxStyle: {
    flexDirection: 'row',
    overflow: 'visible',
    flexWrap: 'wrap',
  },
  animeInfoContainer: {marginTop: 12, marginBottom: 10},
  animeInfoHeader: {
    color: 'white',
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20,
    fontFamily: 'Lato-Bold',
  },
  subAnimeInfoContainer: {
    width: deviceWidth / 1.06,
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: 20,
  },
  subAnimeInfoHeading: {
    color: '#605D74',
    fontSize: 16,
    fontFamily: 'Lato-Bold',
  },
  titleStyles: {color: '#EAE4E4', fontFamily: 'Lato-Bold'},
});
