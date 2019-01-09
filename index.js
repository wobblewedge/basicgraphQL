import express from 'express';
import bodyParser from 'body-parser';
import {graphiqlExpress, graphqlExpress} from 'graphql-server-express';
import {makeExecutableSchema} from 'graphql-tools';
import typeDefs from './schema';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
const app = express();
app.use('/graphiql', graphiqlExpress({
    endpointUrl: '/graphql',
}));
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema}));

app.listen(3000);