module.exports = {

    mutipleMongooseToObj: function(mongooseArrays)
    {
        return mongooseArrays.map(mongooseArray => mongooseArray.toObject())
    },
    mongooseToOjb: function(mongoose){
        return mongoose ? mongoose.toObject() :mongoose;
    }
}