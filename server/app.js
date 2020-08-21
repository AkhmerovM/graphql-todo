const express = require('express');
const graphql = require('express-graphql');
const schema = require('../schema/schema');

const app = express();
const PORT = 4000;


app.use('/graphql', graphql.graphqlHTTP({
    schema,
    graphiql: true,
}));
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('server started');
    }
});
