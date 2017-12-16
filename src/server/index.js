
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import express from 'express';
import compression from 'compression';
import path from 'path';
import React from 'react';
import RouterContext from 'react-router/lib/RouterContext';
import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import match from 'react-router/lib/match';

import configureStore from '../redux/store';

import template from './template';
import routes from '../routes';

const clientAssets = require(KYT.ASSETS_MANIFEST); // eslint-disable-line import/no-dynamic-require
const app = express();

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(compression());

// Setup the public directory so that we can serve static assets.
app.use(express.static(path.join(process.cwd(), KYT.PUBLIC_DIR)));

app.get('/news', (req, res) => {
  res.send({
    "status":"ok",
    "totalResults":10,
    "articles":[
      {
        "source":{
          "id":"bbc-news",
          "name":"BBC News"
        },
        "author":"BBC News",
        "title":"ANC gathers to choose new leader",
        "description":"A Johannesburg conference will pick a new party leader to succeed South African President Jacob Zuma.",
        "url":"http://www.bbc.co.uk/news/world-africa-42375154",
        "urlToImage":"https://ichef.bbci.co.uk/images/ic/1024x576/p05r4b9m.jpg",
        "publishedAt":"2017-12-16T05:34:06Z"
      },
      {
        "source":{
          "id":"bbc-news",
          "name":"BBC News"
        },
        "author":"BBC News",
        "title":"Austrian far right to return to government",
        "description":"Centre-right leader Sebastian Kurz is set to become Europe's youngest prime minister under the deal.",
        "url":"http://www.bbc.co.uk/news/world-europe-42374693",
        "urlToImage":"https://ichef.bbci.co.uk/news/1024/cpsprodpb/3F11/production/_98454161_1b975e5a-3e15-4953-899a-1ba10320308e.jpg",
        "publishedAt":"2017-12-15T21:02:35Z"
      },
      {
        "source":{
          "id":"bbc-news",
          "name":"BBC News"
        },
        "author":"BBC News",
        "title":"Canada billionaire and wife found dead",
        "description":"Apotex founder Barry Sherman and his wife Honey were found in the basement of their Toronto home.",
        "url":"http://www.bbc.co.uk/news/world-us-canada-42375152",
        "urlToImage":"https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/177DF/production/_99232269_043610425.jpg",
        "publishedAt":"2017-12-16T01:02:28Z"
      },
      {
        "source":{
          "id":"bbc-news",
          "name":"BBC News"
        },
        "author":"BBC News",
        "title":"Uber used covert 'undercover agents'",
        "description":"A covert unit at Uber snooped on competitors and regulators, says a letter released by a US court.",
        "url":"http://www.bbc.co.uk/news/technology-42376515",
        "urlToImage":"https://ichef.bbci.co.uk/news/1024/cpsprodpb/1917/production/_99232460_waymoreu.jpg",
        "publishedAt":"2017-12-16T01:56:58Z"
      },
      {
        "source":{
          "id":"bbc-news",
          "name":"BBC News"
        },
        "author":"BBC News",
        "title":"Trump nominee for judge fluffs law test",
        "description":"Matthew Petersen's hearing goes wrong quickly when a Republican senator poses basic legal questions.",
        "url":"http://www.bbc.co.uk/news/world-us-canada-42360539",
        "urlToImage":"https://ichef.bbci.co.uk/news/1024/cpsprodpb/8343/production/_99230633_mediaitem99230632.jpg",
        "publishedAt":"2017-12-15T21:53:45Z"
      },
      {
        "source":{
          "id":"bbc-news",
          "name":"BBC News"
        },
        "author":"BBC News",
        "title":"US Republicans agree landmark tax bill",
        "description":"Senate and House lawmakers reveal final details of the biggest change to the US tax code in 30 years.",
        "url":"http://www.bbc.co.uk/news/world-us-canada-42375149",
        "urlToImage":"https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/8415/production/_99231833_043607114.jpg",
        "publishedAt":"2017-12-15T23:30:56Z"
      },
      {
        "source":{
          "id":"bbc-news",
          "name":"BBC News"
        },
        "author":"BBC News",
        "title":"Mourning from the comfort of your car",
        "description":"Japan's first drive-through funeral service launches.",
        "url":"http://www.bbc.co.uk/news/world-asia-42375120",
        "urlToImage":"https://ichef.bbci.co.uk/news/1024/cpsprodpb/F693/production/_99232136_p05r8n8x.jpg",
        "publishedAt":"2017-12-15T23:25:54Z"
      },
      {
        "source":{
          "id":"bbc-news",
          "name":"BBC News"
        },
        "author":"BBC News",
        "title":"Trump tells FBI: 'I have your back 100%'",
        "description":"Mr Trump praises the FBI after previously calling the agency \"disgraceful\" and \"in tatters\".",
        "url":"http://www.bbc.co.uk/news/world-us-canada-42370506",
        "urlToImage":"https://ichef.bbci.co.uk/news/1024/cpsprodpb/10858/production/_99227676_tv043605087.jpg",
        "publishedAt":"2017-12-15T16:37:49Z"
      },
      {
        "source":{
          "id":"bbc-news",
          "name":"BBC News"
        },
        "author":"BBC News",
        "title":"Australians vote in key by-election",
        "description":"An MP in a dual citizenship row seeks re-election in a poll that threatens the government's majority.",
        "url":"http://www.bbc.co.uk/news/world-australia-42375153",
        "urlToImage":"https://ichef.bbci.co.uk/news/1024/cpsprodpb/6A57/production/_99232272_alexander_keneally.jpg",
        "publishedAt":"2017-12-16T02:27:31Z"
      },
      {
        "source":{
          "id":"bbc-news",
          "name":"BBC News"
        },
        "author":"BBC News",
        "title":"North Korea must earn right to talks - US",
        "description":"Secretary of State Rex Tillerson toughens his stance after earlier offering talks with no preconditions.",
        "url":"http://www.bbc.co.uk/news/world-asia-42372431",
        "urlToImage":"https://ichef.bbci.co.uk/news/1024/cpsprodpb/EA63/production/_99230006_jasongnam.jpg",
        "publishedAt":"2017-12-15T22:02:16Z"
      }
    ]
  })
});

// Setup server side routing.
app.use((request, response) => {
  const history = createMemoryHistory(request.originalUrl);

  match({ routes, history }, (error, redirectLocation, renderProps) => {
    if (error) {
      response.status(500).send(error.message);
    } else if (redirectLocation) {
      response.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);
    } else if (renderProps) {
      const store = configureStore();

      // Grab the initial state from our Redux store
      const initialState = JSON.stringify(store.getState());

      // When a React Router route is matched then we render
      // the components and assets into the template.
      response.status(200).send(template({
        root: renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
          ),
        cssBundle: clientAssets.main.css,
        jsBundle: clientAssets.main.js,
        initialState,
      }));
    } else {
      response.status(404).send('Not found');
    }
  });
});

app.listen(parseInt(KYT.SERVER_PORT, 10));
