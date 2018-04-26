// Environment template for "Disconnected" mode, local dev without a Sitecore connection.

export const environment = {
  production: false,
  scConnected: false,
  deployUrl: '',
  scApiHost: '',
  scApiKey: '',
  scAppName: 'web-app',
  scLayoutServiceConfig: 'jss',
  defaultLanguage: 'en',
  defaultServerRoute: '/',
};
