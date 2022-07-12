import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import Pages from './pages';

const client = new ApolloClient({
  uri: 'https://odyssey-my-graphql-server.herokuapp.com/',
  cache: new InMemoryCache(),
})
ReactDOM.render(
  <React.StrictMode>
<ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
