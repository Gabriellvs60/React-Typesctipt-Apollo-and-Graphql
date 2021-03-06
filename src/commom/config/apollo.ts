import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL + "/graphql",
  request({ setContext }) {
    setContext({
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
  }
});
