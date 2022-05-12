import React from "react";
import "./App.css";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { CountrySearchPage } from "./pages";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CountrySearchPage />
      </div>
    </ApolloProvider>
  );
};
export default App;
