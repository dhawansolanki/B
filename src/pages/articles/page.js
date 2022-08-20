import { GraphQLClient } from 'graphql-request';
const hygraph = new GraphQLClient(
  'https://api-ap-south-1.hygraph.com/v2/cl5wc0itv0z6101uk0asl9dvk/master'
);

import { gql } from 'graphql-request';

const QUERY = gql`
  {
    posts {
      id
      title
    }
  }
`

export async function getStaticProps() {
  const { posts } = await hygraph.request(QUERY)

  return {
    props: {
      posts
    }
  }
}









// import { gql } from '@apollo/client/core';
// const GET_POSTS = gql`
// posts {
//     customPublicationDate
//     excerpt
//     featuredImage
//     publishedAt
//     slug
//     sponsored
//     tags
//     title
//     content
//   }
// `;