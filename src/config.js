const oktaAuthConfig = {
    issuer: 'https://dev-44012506.okta.com/oauth2/default',
    clientId: '0oa1nfbaiy18rcJTt5d7',
    redirectUri: window.location.origin + '/login/callback',
  };
  
  const oktaSignInConfig = {
    baseUrl: 'https://dev-44012506.okta.com',
    clientId: '0oa1nfbaiy18rcJTt5d7',
    redirectUri: window.location.origin + '/login/callback',
    authParams: {

    }
  };
  
  export { oktaAuthConfig, oktaSignInConfig };