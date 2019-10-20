const express = require('express');
const createLocaleMiddleware = require('express-locale');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const nextjsApp = require('next');
const typeDefs = require('./app-data/grapqhl/typeDefs');
const resolvers = require('./app-data/grapqhl/resolvers');
const db = require('./app-data/db');
const setup = require('./app-data/setup');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = nextjsApp({ dev });
const handle = nextApp.getRequestHandler();
const port = 3004;

const App = async () => {
  try {
    await nextApp.prepare();

    const app = express();

    app.use(helmet());
    app.use(bodyParser.json({ limit: '5mb', extended: true }));
    app.use(createLocaleMiddleware());

    const server = new ApolloServer({
      context: async ({ req }) => {
        if (req) {
          const token = req.headers['x-access-token'];

          return { token };
        }

        return null;
      },
      typeDefs,
      resolvers,
      introspection: true, // !dev,
      playground: dev ? ({
        endpoint: 'api', // 'graphiql',
        settings: {
          'editor.theme': 'light',
        },
      }) : true,
    });

    server.applyMiddleware({ app, path: '/api' });

    await db();
    await setup();

    // Routes
    app.get('/', (req, res) => {
      res.redirect(`${req.locale.language}/home`);
    });
    app.get('/:lang/home', (req, res) => {
      const actualPage = '/';
      const queryParams = { locale: req.params.lang };

      nextApp.render(req, res, actualPage, queryParams);
    });
    app.get('*', (req, res) => handle(req, res));

    await app.listen({ port });

    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = App;
