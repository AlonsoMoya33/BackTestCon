import mongoose from "mongoose";

const DBConnection = async()=>{
    try{
        await mongoose.connect(process.env.DB_CONN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB ONLINE')

    }
    catch(error){
        console.log(error);
        throw new Error('Error a la hora de inicializzar DB')
    }
}

module.exports = {
    DBConnection
}