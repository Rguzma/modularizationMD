const {MongooseModel} = require( '../models/MongooseModel.js' );

const MongoosesController ={
    toIndex: function(request, response){
        MongooseModel.findAll()
        .then(data => response.render('index.ejs', {mongooses:data}))
        .catch(err => response.render('index.ejs'));
    },

    toCreateForm: function(request, response){
        response.render('newMongoose.ejs' );
    },
    toEditForm: function(request, response){
        console.log("The mongoose id requested is: ", request.params._id);
        let id = request.params._id;
        console.log(id);
        MongooseModel.findById(id)
        .then(data => response.render("mongooseEdit.ejs", {mongooses:data}))
        .catch(err => response.json(err));
        
    },

    createMongoose: function( request, response ){
        let mName = request.body.mName;
        let age = request.body.age;
                newMongoose = {
                    mName,
                    age
                };
    
                MongooseModel.save(newMongoose)
                    .then( newData => console.log('new mongoose: ', newData))
                    .catch(err => console.log(err));
                response.redirect('/')
    },

    updateMongoose: function( request, response ){
        let id = request.params._id;
        let mName = request.body.mName;
        let age = request.body.age;
                updateMongoose = {
                    mName,
                    age
                };
    
                MongooseModel.update(updateMongoose, id)
                    .then( newData => console.log('update mongoose: ', newData))
                    .catch(err => console.log(err));
                response.redirect('/')
    },

    deleteMongoose: function( request, response ){
        let id = request.params._id;
        MongooseModel.delete(id)
        .then(response.redirect("/"))
        .catch(err => response.json(err));
    }

}


module.exports = {
    MongoosesController
};