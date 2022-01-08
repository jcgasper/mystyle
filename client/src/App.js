import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers } ) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})


function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Router>
          <>
            {/* <Navbar /> */}
            <Switch>
              
              <Route exact path='/profile' component={Profile} />
              
              <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
            </Switch>
          </>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
