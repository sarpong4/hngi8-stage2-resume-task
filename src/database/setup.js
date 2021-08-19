const mongoose = require('mongoose');

const connectionDB = async () => {
    try {
        // Connection string
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true, 
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected: ${connect.connection.host}`);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectionDB;