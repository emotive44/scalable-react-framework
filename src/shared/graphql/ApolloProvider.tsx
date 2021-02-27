import { 
  split,
  ApolloClient, 
  InMemoryCache, 
  createHttpLink,
  ApolloProvider as Provider,
} from '@apollo/client';
import React, { FC, ReactElement } from 'react';
import { setContext } from 'apollo-link-context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';


interface ApolloProviderProps {
  children: ReactElement,
}

const ApolloProvider:FC<ApolloProviderProps> = ({ children }) => {
  const userToken = localStorage.getItem('token');
  
  const wsLink = new WebSocketLink({
    uri: `ws://localhost:5000/api/ws`,
    options: {
      // reconnect: true,   if you want auto reconnect for websocket, when connection failed, uncomment this line
      connectionParams: {
        headers: {
          Authorization: userToken ? `Bearer ${userToken}` : '',
        }
      }
    }
  });
  
  const httpLink = createHttpLink({
    uri: 'http://localhost:5000/api/graphql'
  });
  
  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        Authorization: userToken ? `Bearer ${userToken}` : '',
      },
    };
  });
  
  const link = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' && 
        definition.operation === 'subscription'
      );
    },
    wsLink,
    authLink.concat(httpLink as any) as any
  );
  
  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  return (
    <Provider client={client}>
      {children}
    </Provider>
  )
}

export default ApolloProvider;
