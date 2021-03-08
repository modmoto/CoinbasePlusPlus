import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import {useEffect, useState} from "react";

class StatisticState {
}

export default function PortfolioOverviewScreen() {
  const [statisticsState, setStatisticsState] = useState(new StatisticState());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
        `https://api.github.com/search/commits?q=repo:facebook/react+css&page=${statisticsState}`,
        {
          method: "GET",
          headers: new Headers({
            Accept: "application/vnd.github.cloak-preview"
          })
        }
    )
        .then(res => res.json())
        .then(response => {
          setStatisticsState(response.items);
          setIsLoading(false);
        })
        .catch(error => console.log(error));
  }, [statisticsState]);

  return (
    <View style={styles.container}>
      {isLoading && <p>Loading</p>}
      <Text style={styles.title}>Portfolio</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
