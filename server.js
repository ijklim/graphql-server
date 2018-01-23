let express = require('express');
let { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
let bodyParser = require('body-parser');
let schema = require('./src/schema.js');

const GRAPHQL_PORT = 3100;

const graphQLServer = express();

graphQLServer.use('/graphql', bodyParser.json() ? bodyParser.json() : {}, graphqlExpress({ schema }));
graphQLServer.use('/', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(process.env.PORT || GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running`
  )
);