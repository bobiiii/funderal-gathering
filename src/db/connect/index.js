import mongoose from 'mongoose';

if (!process.env.MONGODB_URI_PRODUCTION || !process.env.MONGODB_URI_DEVELOPMENT) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI" DEV OR PROD');
}

const uri = process.env.MONGODB_URI_PRODUCTION;
const uriDev = process.env.MONGODB_URI_DEVELOPMENT;
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // useFindAndModify: false, // Uncomment if you're using MongoDB 4.0+
//   // useCreateIndex: true,    // Uncomment if you're using MongoDB 4.0+
// };

let isConnected = false;

export const startDB = async (req, res, next) => {
  if (isConnected) {
    return;
  }

  if (process.env.NODE_ENV === 'development') {

    if (!global.mongoose) {
      global.mongoose = { conn: null, promise: null };
    }

    if (!global.mongoose.conn) {
      global.mongoose.promise = mongoose.connect(uriDev).then((mongoose) => {
        console.log('connected to Mongodb (DEV)');
        return mongoose;
      });
    }
    global.mongoose.conn = await global.mongoose.promise;
    isConnected = !!global.mongoose.conn;
    
  } else {
    const connection = await mongoose.connect(uri);
    isConnected = !!connection.connections[0].readyState;
    console.log('connected to Mongodb (PRODUCTION) ');
    
  }
};

// module.exports = { startDB };