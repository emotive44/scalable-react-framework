import { gql } from '@apollo/client';


const NEW_POST = gql`
  subscription {
    newPost {
      id,
      text,
      creator {
        username
      }
    }
  }
`;


export {
  NEW_POST,
}
