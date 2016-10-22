import express = require("express");

import HeroRoutes = require('../routes/HeroRoutes');
import TravelRoutes = require('../routes/TravelRoutes');

var router = express.Router();
class AppRoutes {
  get routes (){
    let heroRoutes = new HeroRoutes();
    let travelRoutes = new TravelRoutes();
    
    heroRoutes.setRoutes(router);
    travelRoutes.setRoutes(router);

    return router;
  }

}

Object.seal(AppRoutes);
export = AppRoutes;