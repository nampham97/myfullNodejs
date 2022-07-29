import express from "express";
import {getHomePage, getAboutPage} from '../controller/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', getHomePage);
   router.get('/about', getAboutPage);
    
    return app.use('/', router);
}

module.exports = initWebRoutes;