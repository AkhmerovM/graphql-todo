const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const movies = [
    { id: '1', name: 'One at Home', genre: 'laugh' },
    { id: '2', name: 'One at Home 2', genre: 'laugh' },
    { id: '3', name: 'One at Home 3', genre: 'laugh' },
];

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    }),
});
const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return movies.find((movie) => args.id === movie.id);
            },
        },
    },
});
module.exports = new GraphQLSchema({
    query: Query,
});
