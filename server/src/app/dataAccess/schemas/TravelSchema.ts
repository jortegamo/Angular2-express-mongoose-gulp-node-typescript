import DataAccess = require('../DataAccess');
import IHeroModel = require("./../../model/interfaces/TravelModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class TravelSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            name : {
                type: String,
                required: true
            },
            location: {
                type: String,
                required: true
            },
            amountPeopleInterested: {
                type: Number,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IHeroModel>("Travels", TravelSchema.schema);
export = schema;