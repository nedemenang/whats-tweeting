import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import config from '../config/database';
import Query from './query';

const Schema = mongoose.Schema;

const User = Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    email: {
        type: String,
        unique: [true, 'User with that email exists'],
        validate: {
            validator: value => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value),
            message: 'Please insert a valid email address'
        },
        required: [true, 'Please provide email']
    },
    username: {
        type: String,
        required: [true, 'Please provide username']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password']
    },
    queries: [{type: Schema.Types.ObjectId, ref: 'Query'}]
});


export default mongoose.model('User', User)