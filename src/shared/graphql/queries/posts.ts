import { gql } from '@apollo/client';


const GET_POSTS = gql`
  query GetPosts {
    getPosts {
      id,
      text,
      creator{
        username
      }
    }
  }
`;

export {
  GET_POSTS,
}
