import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as NodeCache from 'node-cache';
import { getText } from '../functions/getText';

class Search {
  public express: express.Application;
  
  public client: any;

  private searches: any[];

  public cache;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.searches = [];
    this.cache = new NodeCache();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    // // request to clear the search history
    this.express.get('/searches/clear', (req, res, next) => {
      this.searches.forEach((search) => {
        this.cache.take(search);
      });
      this.searches = [];
      res.status(200).json({ searches: this.searches });
    });

    this.express.get('/searches', (req, res, next) => {
      res.status(200).json({ searches: this.searches });
    });

    this.express.post('/search', (req, res, next) => {
      const cacheResult = this.cache.get(req.body.search);
      if (cacheResult) {
        if (!this.searches.includes(req.body.search)) this.searches.push(req.body.search);
        return res.status(200).json(({ searches: this.searches, text: cacheResult, fromCache: true }));
      }
      next();
    },
    async (req, res, next) => {
      const text = await getText(req.body.search, req.body.filter);
      if (text === null) {
        res.status(400);
      } else {
        this.searches.push(req.body.search);
        this.cache.set(req.body.search, text, 100000);
        return res.status(200).json(({ searches: this.searches, text, fromCache: false }));
      }
    });
  }
}

export default new Search().express;
