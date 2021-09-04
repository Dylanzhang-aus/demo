const oktaAuthConfig = {
    issuer: 'https://*******/oauth2/default',
    clientId: '*****',
    redirectUri: window.location.origin + '/login/callback',
  };
  
  const oktaSignInConfig = {
    baseUrl: 'https://******',
    clientId: '******',
    redirectUri: window.location.origin + '/login/callback',
    authParams: {

    }
  };
  
  export { oktaAuthConfig, oktaSignInConfig };
