import BaseBusiness = require("./../BaseBusiness");
import ITravelModel = require("./../../model/interfaces/TravelModel");

interface TravelBusiness extends BaseBusiness<ITravelModel> {

}
export = TravelBusiness;