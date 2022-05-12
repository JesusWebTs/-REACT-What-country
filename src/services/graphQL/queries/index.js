import { gql } from "apollo-boost";

const GET_Countrys = () => {
  return gql`
    query {
      countries {
        name
        phone
        languages {
          name
          code
        }
        code
        native
        continent {
          name
          code
        }
        capital
        currency
      }
    }
  `;
};

const GET_CountrysByFilter = (filter) => {
  //No puedo hacer consultas filtradas por nombre =C Pero me gusaria asi que dejo un ejemplo
  return gql`
    query {
      countries(filter: {
        name: ${filter}
      }) {
        name
        phone
        languages {
          name
          code
        }
        code
        native
        continent {
          name
          code
        }
        capital
        currency
      }
    }
  `;
};

export { GET_Countrys, GET_CountrysByFilter };
