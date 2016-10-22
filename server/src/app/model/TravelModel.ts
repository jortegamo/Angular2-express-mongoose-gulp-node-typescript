import ITravelModel = require('./interfaces/TravelModel');

class TravelModel {

    private _travelMoedl: ITravelModel;

    constructor(travelModel: ITravelModel) {
        this._travelMoedl = travelModel;
    }
    get name (): string {
        return this._travelMoedl.name;
    }

    get location (): string {
        return this._travelMoedl.location;
    }

    get amountPeopleInterested (): number {
        return this._travelMoedl.amountPeopleInterested;
    }
    
}
Object.seal(TravelModel);
export =  TravelModel;