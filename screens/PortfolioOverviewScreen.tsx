import * as React from 'react';
import {useState} from 'react';
import {Button, StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';
import {authorize, AuthorizeResult} from "react-native-app-auth";

export default function PortfolioOverviewScreen() {
    const [authState, setAuthState] = useState({} as AuthorizeResult);

    async function login() {
        const temp = await authorize({
            clientId: '165990ba815ecd8ca68a33dd3ceee1d8f3833ca45fe1f50c16fb71c54a5d411b',
            clientSecret: '07a4bb759be785bb775b06866def822ce3c6426fa4e9e9dc49e34c3d13fe99f8',
            // redirectUrl: 'cbplus://login',
            // redirectUrl: 'exp://192.168.178.21:19000/login',
            redirectUrl: 'exp://127.0.0.1:19000/login',
            scopes: ['wallet:accounts:read'],
            serviceConfiguration: {
                authorizationEndpoint: 'https://www.coinbase.com/oauth/authorize',
                tokenEndpoint: 'https://api.coinbase.com/oauth/token',
                revocationEndpoint: 'https://api.coinbase.com/oauth/revoke',
            },
        });
        console.log(temp);
        // setAuthState(temp);
    }

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Portfolio</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Button title="login" onPress={login}/>
        <Text>{authState?.accessToken}</Text>
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
