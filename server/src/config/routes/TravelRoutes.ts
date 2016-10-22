import express = require("express");
import TravelController = require("./../../controllers/TravelController");

class TravelRoutes {
  private _travelController: TravelController;

  constructor () {
    this._travelController = new TravelController();
  }
  
  setRoutes (router: any) {
      var controller = this._travelController;

      router.get("/travels", controller.retrieve);
      router.post("/travels", controller.create);
      router.put("/travels/:_id", controller.update);
      router.get("/travels/:_id", controller.findById);
      router.delete("/travels/:_id", controller.delete);

      return router;
  }

}

Object.seal(TravelRoutes);
export = TravelRoutes;