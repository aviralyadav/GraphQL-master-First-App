import React from "react";
import ReactDOM from "react-dom";
import {Route, Router, hashHistory, IndexRoute} from 'react-router';
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import App from './App';
import SongList from "./components/SongList";

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
        </Route>
      </Router>
      {/* <SongList /> */}
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
