import TravelModel = require("./../model/TravelModel");
import ITravelModel = require("./../model/interfaces/TravelModel");
import TravelSchema = require("./../dataAccess/schemas/TravelSchema");
import RepositoryBase = require("./BaseRepository");

class TravelRepository  extends RepositoryBase<ITravelModel> {
    constructor () {
        super(TravelSchema);
    }
}

Object.seal(TravelRepository);
export = TravelRepository;