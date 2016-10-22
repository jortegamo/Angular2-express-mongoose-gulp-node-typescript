/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
import express = require('express');
import path = require('path');

import HeroRoutes = require('../routes/HeroRoutes');
import TravelRoutes = require('../routes/TravelRoutes');
import AppRoutes = require('../routes/AppRoutes');
var app = express();

class Routes {

    get routes() {

        app.use("/", new AppRoutes().routes);
        
        return app;
    }
}
export = Routes;