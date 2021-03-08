import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/login')],
  config: {
    screens: {
      Root: {
        screens: {
          Portfolio: {
            screens: {
              PortfolioScreen: 'Portfolio',
            },
          },
          CoinDetail: {
            screens: {
              CoinDetailScreen: 'CoinDetail',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
