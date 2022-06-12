const mongoose = require('mongoose');

const getConnection = async () => {
    try{
        const url ='mongodb://user_db:9oJpWgbi8nUtQWem@cluster0-shard-00-00.vu1g5.mongodb.net:27017,cluster0-shard-00-01.vu1g5.mongodb.net:27017,cluster0-shard-00-02.vu1g5.mongodb.net:27017/apirest_db_iud?ssl=true&replicaSet=atlas-10qdak-shard-0&authSource=admin&retryWrites=true&w=majority';
        await mongoose.connect(url);

        console.log('Successful Connection to the Database');
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    getConnection,
}