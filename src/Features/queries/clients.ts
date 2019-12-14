import { gql } from 'apollo-boost';

export const GET_ALL_CLIENTS = gql`
  {
  allClients {
    id
    name
    age
    telephone
    address
    type
  }
}
`;

export const GET_CLIENT = gql`
  query($_id: ID!) {
    getClient(_id: $_id) {
      name
      age
      telephone
      address
      type
    }
  }
`;

export const CREATE_CLIENT = gql`
  mutation(
    $name: String!
    $age: String!
    $telephone: String!
    $address: String!
    $type: String!
  ) {
    addRecipe(
      name: $name
      age: $age
      telephone: $telephone
      address: $address
      type: $type
    ) {
      name
      age
      telephone
      address
      type
    }
  }
`;
