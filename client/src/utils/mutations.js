import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        displayname
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!, $displayname: String!) {
    addUser(email: $email, password: $password, displayname: $displayname) {
      token
      user {
        _id
        displayname
      }
    }
  }
`;

export const ADD_TEMP_IMAGE = gql`
  mutation addTempImage($filename: String!) {
    addTempImage(filename: $filename) {
      _id
      email
      displayname
      password
      tempImageFile
    }
  }
`;

export const REMOVE_TEMP_IMAGE = gql`
  mutation removeTempImage {
    removeTempImage {
      _id
      email
      displayname
      password
      tempImageFile
    }
  }
`;

export const ADD_ARTICLE = gql`
  mutation addArticle($category: ArticleCategory!, $description: String, $tags: [String], $dateAcquired: Date) {
    addArticle(category: $category, description: $description, tags: $tags, dateAcquired: $dateAcquired) {
      _id
      category
      description
      tags
      imageFile
      dateAcquired
      lastWorn
      wearings
    }
  }
`;

export const UPDATE_ARTICLE = gql`
  mutation updateArticle($articleId: ID!, $category: ArticleCategory, $description: String, $tags: [String], $imageAction: ImageAction, $dateAcquired: Date) {
    updateArticle(articleId: $articleId, category: $category, description: $description, tags: $tags, imageAction: $imageAction, dateAcquired: $dateAcquired) {
      _id
    }
  }
`
export const REMOVE_ARTICLE = gql`
  mutation removeArticle($articleId: ID!) {
    removeArticle(articleId: $articleId) {
      description
      category
      _id
    }
  }
`;

export const ADD_WEARING = gql`
  mutation addWearing($articleId: ID!, $wearDate: Date!) {
    addWearing(articleId: $articleId, wearDate: $wearDate) {
      _id
      category
      description
      tags
      imageFile
      dateAcquired
      lastWorn
      wearings
    }
  }
`;