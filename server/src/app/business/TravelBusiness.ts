import TravelRepository = require("./../repository/TravelRepository");
import ITravelBusiness = require("./interfaces/TravelBusiness");
import ITravelModel = require("./../model/interfaces/TravelModel");
import TravelModel = require("./../model/TravelModel");


class TravelBusiness implements ITravelBusiness {
    private _travelRepository: TravelRepository;

    constructor () {
        this._travelRepository = new TravelRepository();
    }

    create (item: ITravelModel, callback: (error: any, result: any) => void) {
        this._travelRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._travelRepository.retrieve(callback);
    }

    update (_id: string, item: ITravelModel, callback: (error: any, result: any) => void) {

        this._travelRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._travelRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._travelRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: ITravelModel) => void) {
        this._travelRepository.findById(_id, callback);
    }

}


Object.seal(TravelBusiness);
export = TravelBusiness;