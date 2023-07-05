// 1 require mongoose
const mongoose = require ('mongoose');

// 2 create DB
const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log('DB connected ..')
    }catch(error){
        console.log('Can not connect to DB ... ')
    }
};

// 3 export
module.exports = connectDB;