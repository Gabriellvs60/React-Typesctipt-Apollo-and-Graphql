import { ApolloError } from "apollo-boost";

export class ErrorHandler {
  static handle(error: ApolloError, message: string) {
    if (error.graphQLErrors) {
      console.error("GraphQL Error: ", error.graphQLErrors);
    }

    if (error.networkError) {
      console.error("Network Error: ", error.networkError);
    }
  }
}
