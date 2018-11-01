const {gql} = require('apollo-server-express');

// Main Schema
const typeDefs = gql`
  type Review {
    id: Int
    username: String
    reviewText: String
    responseText: String
    createdAt: String
  }

  type Ratings {
    accuracyRating: Float
    check_In_Rating: Float
    cleanlinessRating: Float
    communicationRating: Float
    locationRating: Float
    valueRating: Float
  }

  type Stats {
    pageNumberCount: Int
    reviewCount: Int
  }

  type Payload {
    stats: [Stats]
    ratings: [Ratings]
    reviews: [Review]
  }

  type Query {
    getPayload: [Payload]
  }
`;

module.exports = typeDefs;
