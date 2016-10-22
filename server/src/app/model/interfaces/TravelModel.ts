import mongoose = require("mongoose");

interface TravelMode extends mongoose.Document {
    name: string;
    amountPeopleInterested: number;
    location: string;
}

export = TravelMode;