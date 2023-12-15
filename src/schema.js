export const typeDefs = `#graphql
  type Query {
    Details: Details,
    Positions: Positions
  },
  type Details{
    name: String,
    email: String,
    address: String
  },
  type Positions{
    firstRole: String,
    secondRole: String
  }
`;
