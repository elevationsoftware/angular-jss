// Environment template for server-side execution (SSR) in "Integrated" or "Headless" mode.

export const environment = {
  production: true,
  scConnected: true,
  deployUrl: '/dist/web-app/browser',
  scApiHost: 'http://sc90.local',
  scApiKey: '{AB9E7FE0-27A5-4B91-9B6F-D51A9B1FA64C}',
  scAppName: 'web-app',
  scLayoutServiceConfig: 'jss',
  defaultLanguage: 'en',
  defaultServerRoute: '/',
};
