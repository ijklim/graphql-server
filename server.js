let express = require('express');
let { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
let bodyParser = require('body-parser');
let schema = require('./src/schema.js');

const GRAPHQL_PORT = 3100;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(process.env.PORT || GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running`
  )
);