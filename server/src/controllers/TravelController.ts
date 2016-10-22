import express = require("express");
import IBaseController = require("./BaseController");
import TravelBusiness = require("./../app/business/TravelBusiness");
import ITravelModel = require("./../app/model/interfaces/TravelModel");

class TravelController implements IBaseController <TravelBusiness> {

  create(req: express.Request, res: express.Response): void{
    try{
      var travel: ITravelModel = <ITravelModel>req.body;
      var travelBusiness = new TravelBusiness();
      travelBusiness.create(travel, (error, result) => {
        if (error) res.send({'error': 'error'});
        else res.send({'success': 'success'});
      });
    }catch(e){
      console.log(e);
      res.send({'error': 'error in your request'});
    }
  }
  update(req: express.Request, res: express.Response): void{
    try{
      var travel: ITravelModel = <ITravelModel>req.body;
      var _id: string = req.params._id;
      var travelBusiness = new TravelBusiness();
      travelBusiness.update(_id, travel, (error, result) => {
        if (error) res.send({'error': 'error'});
        else res.send({'success': 'success'});
      });
    }catch(e){
      console.log(e);
      res.send({'error': 'error in your request'});
    }
  }
  delete(req: express.Request, res: express.Response): void {
    try{
      var _id: string = req.params._id;
      var travelBusiness = new TravelBusiness();
      travelBusiness.delete(_id, (error, result) => {
        if (error) res.send({'error': 'error'});
        else res.send({'success': 'success'});
      });
    }catch(e){
      console.log(e);
      res.send({'error': 'error in your request'});
    }
  }
  retrieve(req: express.Request, res: express.Response): void {
    try{
      var travelBusiness = new TravelBusiness();
      travelBusiness.retrieve((error, result) => {
        if (error) res.send({'error': 'error'});
        else res.send({'success': 'success'});
      });
    }catch(e){
      console.log(e);
      res.send({'error': 'error in your request'});
    }
  }
  findById(req: express.Request, res: express.Response): void {
    try{
      var _id: string = req.params._id;
      var travelBusiness = new TravelBusiness();
      travelBusiness.findById(_id, (error, result) => {
        if (error) res.send({'error': 'error'});
        else res.send({'success': 'success'});
      });
    }catch(e){
      console.log(e);
      res.send({'error': 'error in your request'});
    }
  }
  
}
export = TravelController;