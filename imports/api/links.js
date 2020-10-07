import {Mongo} from 'meteor/mongo';

export const LinksCollection = new Mongo.Collection('links');

export const RawHeaders = new Mongo.Collection('raw_headers');

export const X_ARR_LOG_ID = 'x-arr-log-id';