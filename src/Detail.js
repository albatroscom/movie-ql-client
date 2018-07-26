import React from "react";
import { Query } from 'react-apollo';
import { MOVIE_DETAILS } from './queries';
import { Helmet } from 'react-helmet';
import Movie from './Movie';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
`;

const Card = styled.div`
    box-shadow: 0 10px 20px rgba(0,0,0,0.19) 0 6px 6px rgba(0,0,0,0.23);
`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 10px;
`;

const Paragraph = styled.span`
    margin-bottom: 10px;
`;

const MovieContainer = styled.div`
    display: grid;
`;

const Image = Card.withComponent('img');

const Detail = ({
    match: {
        params: { movieId }
    }
}) => (
    <Query query={MOVIE_DETAILS} variables={{ movieId }}>
    {({loading, data, error}) => {
        if (loading) {
            return (
                <React.Fragment>
                    <Helmet>
                        <title>Loading | MovieQL</title>
                    </Helmet>
                    loading
                </React.Fragment>
            );
        }
        if (error) {
            return "error";
        }
        return (
            <React.Fragment>

                <Container>
                    <Helmet>
                        <title>{data.movie.title} | MovieQL</title>
                    </Helmet>
                    <Image src={data.movie.medium_cover_image} />
                    <span>
                        <Title>{data.movie.title}</Title>
                        <Paragraph bold>Rating: {data.movie.rating}</Paragraph>
                        <Paragraph>{data.movie.description_intro}</Paragraph>
                    </span>
                </Container>

                <Title>Suggested</Title>
                <MovieContainer>
                    {data.suggestions.map(movie => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            rating={movie.rating}
                            poster={movie.medium_cover_image}
                        />
                    ))}
                </MovieContainer>
            </React.Fragment>
        );
    }}
    </Query>
);

export default Detail;