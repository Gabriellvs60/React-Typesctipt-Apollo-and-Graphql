import React from 'react';
import { ApolloProvider } from "react-apollo";
import { client } from "../commom/config/apollo";
import { ThemeProvider } from "styled-components";
import {GlobalStyle, colors} from '../commom/theme';
import { BrowserRouter, Switch } from "react-router-dom";
import { Routes } from "../commom/routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <ThemeProvider theme={colors}>
          <BrowserRouter>
            <Switch>
              <Routes/>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
