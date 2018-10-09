/**
 * app.ts
 * Sets up the Express Instance of all the required middlewares and routers
 */

import CORS from 'cors';
import path from 'path';
import logger from 'morgan';
import helmet from 'helmet';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import expressSession  from 'express-session';
import expressValidator from 'express-validator';

//import { ApplyRoutes } from './routes/applyRoutes';
import { Create404, ErrorHandler } from '@middlewares';

/**
 * Express Instance
 */
const app = express();

// GZIP Compression
app.use(compression());

// Cross-Origin Headers
app.use(CORS());

// Request Logging
app.use(logger('dev'));

// Common Headers Security
app.use(helmet());

// Content Security Policy Headers
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
    styleSrc: ["'self'"]
  },
  reportOnly: true,
  browserSniff: false
}));

// Referrer Headers
app.use(helmet.referrerPolicy({ policy: 'no-referrer' }));

// JSON Parsing
app.use(express.json({ type: ['json', 'application/csp-report'] }));

// Encoded URL Parsing
app.use(express.urlencoded({ extended: false }));

// Cookie Parser
app.use(cookieParser());

// Cookie Validator
app.use(expressValidator());

// Public Files
app.use(express.static(path.join(__dirname, '../public')))

// Cookie Serving
app.use(expressSession({
  secret: 'ThisIsAString',
  saveUninitialized: false,
  resave: false
}));

// Routes
//ApplyRoutes(app);

// 404 Error Handler
app.use(Create404);

// General Error Handler
app.use(ErrorHandler);

export { app as ExpressApp };
export default app;

