import { gql } from '@apollo/client';


const CREATE_POST = gql`
  mutation CreatePost($text: String!) {
    createPost(text: $text) {
      id,
      text,
      creator {
        username
      }
    }
  }
`;

export {
  CREATE_POST,
}
