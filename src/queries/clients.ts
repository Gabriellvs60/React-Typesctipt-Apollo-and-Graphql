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