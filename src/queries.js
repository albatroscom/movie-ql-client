import gql from 'graphql-tag';

export const HOME_PAGE = gql`
{
    movies(limit: 30, rating: 7) {
        id
        title
        rating
        description_intro
        medium_cover_image
        genres
    }
}
`;