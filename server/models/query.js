import mongoose from 'mongoose';
import User from './user';

const Schema = mongoose.Schema;

const Query =  Schema({
    geocode: {
        type: String,
    },
    query: {
        type: String
    },
    longitude: {
        type: String 
    }, 
    latitude: {
        type: String
    },
    userForQuery: [{type: Schema.Types.ObjectId, ref: 'User'}]
});


export default mongoose.model('Query', Query)