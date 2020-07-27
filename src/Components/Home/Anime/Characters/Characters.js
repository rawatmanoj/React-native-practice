import React, {useEffect, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Context} from '../../../../store/store';
import axios from 'axios';

async function fetchCharacters(id) {
  try {
    const res = await axios(
      `https://api.jikan.moe/v3/anime/${id}/characters_staff`,
    );
    return res.data.top;
  } catch (err) {
    return console.log(err);
  }
}

export default function Characters() {
  const [state] = useContext(Context);
  useEffect(() => {
    const fetchChar = async () => {
      const char = fetchCharacters(state.currentAnime);
      console.log(char);
    };

    fetchChar();
  }, []);
  return (
    <View style={styles.scene}>
      <Text>Characters</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#191725',
  },
});
