export const GET_LANDING_PAGE = /* GraphQL */ `
  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          logo {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`;

