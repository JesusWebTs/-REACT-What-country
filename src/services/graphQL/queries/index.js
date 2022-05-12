import { gql } from "apollo-boost";

const GET_Countrys = () => {
  return gql`
    query {
      getCharacters {
        _id
        name
        race
        games {
          title
          developers {
            name
          }
        }
      }
    }
  `;
};

const GET_CountrysByFilter = (filter) => {
  return gql`
    query {
      getCharacters {
        _id
        name
        race
        games {
          title
          developers {
            name
          }
        }
      }
    }
  `;
};

export { GET_Countrys, GET_CountryByFilter };
