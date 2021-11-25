const express = require( 'express');
const MongoosesRouter = express.Router();
const {MongoosesController} = require( '../controllers/mongoosesController' );

MongoosesRouter

    .get ('/', MongoosesController.toIndex)

    .get('/mongoose/new', MongoosesController.toCreateForm)

    .get ('/mongooses/edit/:_id', MongoosesController.toEditForm)

    //Create Mongoose
    .post( '/mongooses', MongoosesController.createMongoose)

    //Update Mongoose
    .post( '/mongooses/:_id', MongoosesController.updateMongoose)
    //Delete Mongoose
    .post( '/mongooses/destroy/:_id', MongoosesController.deleteMongoose)


    module.exports = {
        MongoosesRouter
    };
    