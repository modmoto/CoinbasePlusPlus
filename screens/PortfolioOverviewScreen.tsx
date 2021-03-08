import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import {useEffect, useState} from "react";

interface StatisticState {
    items: any[]
}

export default function PortfolioOverviewScreen() {
  const statisticState = { items: [] } as StatisticState;
  const [statisticsState, setStatisticsState] = useState(statisticState);
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
          setStatisticsState(response);
          setIsLoading(false);
        })
        .catch(error => console.log(error));
  }, [statisticsState]);

  const body = isLoading
      ? <Text>Loading...</Text>
      : <>
          <Text style={styles.title}>Portfolio</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </>;

  return (
    <View style={styles.container}>
      {body}
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
