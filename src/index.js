import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from 'redux/rootReducers';

import { Router } from 'router';

const store = createStore(rootReducers, {});

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    });
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);
