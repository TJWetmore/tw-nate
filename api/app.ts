
import * as bodyParser from 'body-parser';
import * as express from 'express';
import Routes from './routes/routes';

class App {
  public express: express.Application;

  public searches: any[];

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.searches = [];
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(express.static(`${process.cwd()}/frontend/build/`));
  }

  private routes(): void {
    this.express.get('/', (req, res) => {
      res.sendFile(`${process.cwd()}/frontend/build/index.html`);
    });

    // user route
    this.express.use('/api', Routes);

    // handle undefined routes
    this.express.use('*', (req, res) => {
      res.send('URL incorrect, please try again');
    });
  }
}

export default new App().express;
