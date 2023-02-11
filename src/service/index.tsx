import client from "./apollo-client";
import { gql } from "@apollo/client";

export function HomeService() {
  return client.query({
    query: gql`
      query getHome {
        home {
          data {
            attributes {
              title
              video {
                data {
                  attributes {
                    url
                  }
                }
              }
              who {
                title
                description
              }
              sunrise {
                title
                description
              }
              why {
                title
                description
              }
              Kofu {
                title
              }
              kofukons {
                data {
                  attributes {
                    title
                    image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
}

export function MenuService() {
  return client.query({
    query: gql`
      query getMenu {
        menus {
          data {
            attributes {
              title
              slug
            }
          }
        }
      }
    `,
  });
}
