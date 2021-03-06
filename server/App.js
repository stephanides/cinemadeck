const express = require('express');
const createLocaleMiddleware = require('express-locale');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const nextjsApp = require('next');
const cors = require('cors');
const typeDefs = require('./app-data/grapqhl/typeDefs');
const resolvers = require('./app-data/grapqhl/resolvers');
const db = require('./app-data/db');
const setup = require('./app-data/setup');
const User = require('./app-data/db/models/User');

const MailNotificationRoute = require('./app-data/router/mail');
const PaymentRoute = require('./app-data/router/payment');
const PaymentController = require('./app-data/controller/payment');

const paymentOrder = new PaymentController();
const dev = process.env.NODE_ENV !== 'production';
const nextApp = nextjsApp({ dev });
const handle = nextApp.getRequestHandler();
const port = 3004;

const App = async () => {
  try {
    await nextApp.prepare();

    const app = express();

    app.use(helmet());
    app.use(cors());
    app.use(bodyParser.json({ limit: '5mb', extended: true }));
    app.use(createLocaleMiddleware({
      priority: ['default', 'accept-language'],
      default: 'cz-CS',
    }));

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

    // Redirects
    app.get('/', (req, res) => {
      res.redirect(`${req.locale.language}/home`);
    });
    app.get('/eshop', (req, res) => {
      res.redirect(`${req.locale.language}/eshop`);
    });
    app.get('/eshop/cart', (req, res) => {
      res.redirect(`${req.locale.language}/eshop/cart`);
    });
    app.get('/eshop/download', (req, res) => {
      res.redirect(`${req.locale.language}/eshop/download`);
    });
    app.get('/eshop/funnel', (req, res) => {
      res.redirect(`${req.locale.language}/eshop/funnel`);
    });
    app.get('/obchodni-podminky', (req, res) => {
      res.redirect(`${req.locale.language}/obchodni-podminky`);
    });
    app.get('/terms-conditions', (req, res) => {
      res.redirect(`${req.locale.language}/terms-conditions`);
    });
    app.get('/ochrana-osobnych-udaju', (req, res) => {
      res.redirect(`${req.locale.language}/ochrana-osobnych-udaju`);
    });
    app.get('/eshop/order-success', (req, res) => {
      res.redirect(`${req.locale.language}/eshop/order-success`);
    });
    app.get('/code-not-found', (req, res) => {
      res.redirect(`${req.locale.language}/code-not-found`);
    });
    //
    app.use(MailNotificationRoute);
    app.use(PaymentRoute);
    // Routes
    app.get('/:lang/home', (req, res) => {
      const actualPage = '/';
      const queryParams = { locale: req.params.lang };

      nextApp.render(req, res, actualPage, queryParams);
    });
    app.get('/:lang/eshop', (req, res) => {
      const actualPage = '/eshop';
      const queryParams = { locale: req.params.lang };

      nextApp.render(req, res, actualPage, queryParams);
    });
    app.get('/:lang/eshop/cart', (req, res) => {
      const actualPage = '/eshop/cart';
      const queryParams = {
        locale: req.params.lang,
        orderDiscount: req.query.orderDiscount,
      };

      nextApp.render(req, res, actualPage, queryParams);
    });
    app.get('/:lang/eshop/download/:uniqUid', (req, res) => {
      const actualPage = '/eshop/download';
      const queryParams = {
        locale: req.params.lang,
        uniqUid: req.params.uniqUid,
      };

      nextApp.render(req, res, actualPage, queryParams);
    });
    app.get('/:lang/eshop/funnel', (req, res) => {
      const actualPage = '/eshop/funnel';
      const queryParams = { locale: req.params.lang };

      nextApp.render(req, res, actualPage, queryParams);
    });
    app.get('/:lang/eshop/order-success', (req, res) => {
      try {
        // const paymentStatus = await paymentOrder.paymentStatus(req.query.id);
        const actualPage = '/eshop/order-success';
        const queryParams = {
          locale: req.params.lang,
          orderNum: req.query.orN,
          paymentId: req.query.id,
        };

        nextApp.render(req, res, actualPage, queryParams);
      } catch (err) {
        throw new Error(err);
      }
    });
    app.get('/:lang/get-payment-status', async (req, res) => {
      const paymentStatus = await paymentOrder.paymentStatus(req.query.id);

      res.json({ paymentStatus });
    });
    app.post('/:lang/get-payment-status', async (req, res) => {
      const paymentStatus = await paymentOrder.paymentStatus(req.body.id);

      res.json({ paymentStatus });
    });
    app.get('/:lang/obchodni-podminky', (req, res) => {
      const actualPage = '/obchodni-podminky';
      const queryParams = { locale: req.params.lang };

      nextApp.render(req, res, actualPage, queryParams);
    });
    app.get('/:lang/code-not-found', (req, res) => {
      const actualPage = '/code-not-found';
      const queryParams = { locale: req.params.lang };

      nextApp.render(req, res, actualPage, queryParams);
    });
    app.get('/:lang/terms-conditions', (req, res) => {
      const actualPage = '/obchodni-podminky';
      const queryParams = { locale: req.params.lang };

      nextApp.render(req, res, actualPage, queryParams);
    });
    app.get('/:lang/ochrana-osobnych-udaju', (req, res) => {
      const actualPage = '/ochrana-osobnych-udaju';
      const queryParams = { locale: req.params.lang };

      nextApp.render(req, res, actualPage, queryParams);
    });
    app.get('/:lang/gdpr', (req, res) => {
      const actualPage = '/ochrana-osobnych-udaju';
      const queryParams = { locale: req.params.lang };

      nextApp.render(req, res, actualPage, queryParams);
    });
    app.get('/auth/register', async (req, res) => {
      try {
        const admin = await User.findOne({ role: 1 });

        if (admin) {
          res.redirect('/auth/login');
        } else {
          const actualPage = '/auth/register';
          nextApp.render(req, res, actualPage);
        }
      } catch (err) {
        throw new Error(err);
      }
    });
    app.get('*', (req, res) => handle(req, res));

    app.listen({ port });

    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = App;
